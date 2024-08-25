import {
  useHistory,
  useParams,
} from 'react-router-dom/cjs/react-router-dom.min';
import { addDocumentToPortfolio } from '../../service';
import { useAllDocuments } from '../state/hooks';
import Loader from '../Loader';

export default function  NewDocPage({}) {

  const {
    data: allDocumentsData,
    isLoadingdata: isLoadingDocumentsData, 
  } = useAllDocuments();
  

  const history = useHistory();
  const { id } = useParams();


  if (isLoadingDocumentsData && !id) {
    return (
      <>
        <Loader />
      </>
    );
  } 
  if (id === undefined || id === null) {
    if (allDocumentsData && allDocumentsData.length > 0) {
      history.push(`/documents/${allDocumentsData[0].submissionId}`);
      return null; 
    }
  } else {
    return <FeedbacksRoot isDocumentPage={true} />;
  }
}
