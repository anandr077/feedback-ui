import {
  useHistory,
  useParams,
} from 'react-router-dom/cjs/react-router-dom.min';
import { addDocumentToPortfolio } from '../../service';
import { useAllDocuments } from '../state/hooks';
import Loader from '../Loader';

export default function NewDocPage({}) {
  const { data: allDocumentsData, isLoadingdata: isLoadingDocumentsData ,resetData,setData} =
    useAllDocuments();

  console.log('allDocumentsData',allDocumentsData);

  const history = useHistory();


  if (isLoadingDocumentsData) {
    return (
      <>
        <Loader />
      </>
    );
  }

  if (allDocumentsData && allDocumentsData.length > 0) {
    history.push(`/documents/${allDocumentsData[0].submissionId}`);
    return null;
  } else {
    addDocumentToPortfolio(null, null, 'Untitled Question').then((response) => {
      console.log('firstResponse', response);
      history.push(`/documents/${response.id}`);
    });
  }
}
