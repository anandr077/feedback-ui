import { useState, useEffect } from 'react';

export function ConfirmationDialog(props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (props.message && props.message.length > 0) {
      setShow(true);

      const timeout = setTimeout(() => {
        setShow(false);
        props.onClose();
      }, props.timeout || 5000);

      return () => clearTimeout(timeout);
    }
  }, [props.message, props.timeout, props.onClose]);

  if (show) {
    return (
      <div style={{ position: 'fixed', bottom: '0', left: '0', width: '100%', backgroundColor: '#f2f2f2', padding: '20px', textAlign: 'center' }}>
        {props.message} {props.link && <a href={props.link} target="_blank" rel="noopener noreferrer">{props.linkText}</a>}
      </div>
    );
  } else {
    return null;
  }
}
export default ConfirmationDialog;