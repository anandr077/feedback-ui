import { useEffect, useRef, useState } from 'react';
import {  useNavigate } from 'react-router';
import { addDocumentToPortfolio, getDocuments } from '../../service';
import Loader from '../Loader';
import { useAllDocuments } from '../state/hooks';

export default function NewDocPage() {
  const [allDocumentsData, setAllDocumentsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
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
    navigate(`/documents/${allDocumentsData[0].submissionId}`);
  } else {
    addDocumentToPortfolio(null, null, 'Untitled Question')
      .then((response) => {
        navigate(`/documents/${response.id}`);
        resetData();
      })
      .catch((err) => {
        console.error('Error creating document', err)
      });
  }


  

  return null;
}
