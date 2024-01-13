import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { addDocumentToPortfolio } from "../../service";

export default function NewDocPage({}) {
    const history = useHistory();
    // alert('NewDocumentPage');
    const { id } = useParams();
    if (id === undefined || id === null) {
      addDocumentToPortfolio(null, null, 'Untitled Question')
      .then(response => {
        history.push(`/submissions/${response.id}`);
      })
    } else {
      return <FeedbacksRoot isDocumentPage={true} />;
    }
  }