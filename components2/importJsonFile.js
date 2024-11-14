import { toast } from 'react-toastify';
import Toast from '../components/Toast';

export function importJsonFile(event) {
  return new Promise((resolve, reject) => {
    const file = event.target.files[0];

    if (file && file.type === 'application/json') {
      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const jsonData = JSON.parse(e.target.result);
          resolve(jsonData);
        } catch (error) {
          console.error('Error parsing JSON:', error);
          reject(error);
        }
      };

      reader.onerror = (error) => {
        console.error('File reading error:', error);
        reject(error);
      };

      reader.readAsText(file);
    } else {
      toast(<Toast message={'Please upload a valid comment bank file.'} />);
      reject(new Error('Invalid file type'));
    }
  });
}
