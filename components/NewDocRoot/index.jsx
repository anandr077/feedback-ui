import { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { addDocumentToPortfolio, getDocuments } from '../../service';
import Loader from '../Loader';
import { useAllDocuments } from '../state/hooks';

export default function NewDocPage() {
  const [allDocumentsData, setAllDocumentsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const didEffectRunRef = useRef(false);
  const {
   
    resetData,
    setData,
  } = useAllDocuments();

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const data = await getDocuments();
        setAllDocumentsData(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching documents:', error);
        setIsLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (allDocumentsData.length > 0) {
    history.push(`/documents/${allDocumentsData[0].submissionId}`);
  } else {
    addDocumentToPortfolio(null, null, 'Untitled Question')
      .then((response) => {
        history.push(`/documents/${response.id}`);
        resetData();
      })
      .catch((err) => {
        console.error('Error creating document', err)
      });
  }


  

  return null;
}
