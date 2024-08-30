import {
  useHistory,
} from 'react-router-dom/cjs/react-router-dom.min';
import { addDocumentToPortfolio } from '../../service';
import { useAllDocuments } from '../state/hooks';
import Loader from '../Loader';
import { useEffect, useState } from 'react';

export default function NewDocPage() {
  const {
    data: allDocumentsData,
    isLoadingdata: isLoadingDocumentsData,
    resetData,
    setData,
  } = useAllDocuments();

  const history = useHistory();
  const [hasCreatedDocument, setHasCreatedDocument] = useState(false);

  useEffect(() => {
    if (!isLoadingDocumentsData) {
      if (allDocumentsData && allDocumentsData.length > 0) {
        history.push(`/documents/${allDocumentsData[0].submissionId}`);
      } else if (!hasCreatedDocument) {
        const createDocument = async () => {
          try {
            const response = await addDocumentToPortfolio(null, null, 'Untitled Question');
            await resetData(); // Fetch the updated list of documents
            setHasCreatedDocument(true);
          } catch (error) {
            console.error('Error creating document:', error);
          }
        };
        createDocument();
      }
    }
  }, [isLoadingDocumentsData, allDocumentsData, hasCreatedDocument, history, resetData]);

  if (isLoadingDocumentsData || !hasCreatedDocument) {
    return <Loader />;
  }

  return null;
}
