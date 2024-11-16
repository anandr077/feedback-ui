import { toast } from "react-toastify";
import Toast from "../components/Toast";

export const validateRubric = (markingCriteria) => {
    let isValid = true;
    if (markingCriteria.title === '' || markingCriteria.title === undefined) {
      toast(
        <Toast message={'Please enter a title for the marking criteria'} />
      );
      isValid = false;
    }
    if (markingCriteria.criterias.length === 0) {
      toast(<Toast message={'Please add at least one criteria'} />);
      isValid = false;
      return ;
    }

    for (let indexout = 0; indexout < markingCriteria.criterias.length; indexout++) {
      const criteria = markingCriteria.criterias[indexout];
  
      if (criteria.title === undefined || criteria.title === '') {
        toast(
          <Toast
            message={`Please enter a title for criteria ${indexout + 1}`}
          />
        );
        isValid = false;
        return; 
      }
  
      for (let level of criteria.levels) {
        if (level.name == undefined || level.name === '') {
          toast(
            <Toast
              message={`Please enter a name for all levels in criteria ${
                indexout + 1
              }`}
            />
          );
          isValid = false;
          return; 
        }
  
        if (level.description == undefined || level.description === '') {
          toast(
            <Toast
              message={`Please enter a description for all levels in criteria ${
                indexout + 1
              }`}
            />
          );
          isValid = false;
          return;
        }
      }
    }

    return isValid;
  };


export function validateStrengthsTargets(strengthAndTargetdata) {
    if (!strengthAndTargetdata.title.trim()) {
      toast(<Toast message={'Please enter title for marking criteria'} />);
      return false;
    }
    for (const criteria of strengthAndTargetdata.strengthsTargetsCriterias) {
      if (!criteria.title.trim()) {
        toast(<Toast message={'Please enter criteria title'} />);
        return false;
      }

      if (criteria.strengths.length < 1 || criteria.targets.length < 1) {
        toast(
          <Toast
            message={'You have to enter at least two option for each category'}
          />
        );
        return false;
      }

      if (
        criteria.strengths.some((strength) => !strength.trim()) ||
        criteria.targets.some((target) => !target.trim())
      ) {
        toast(
          <Toast message={'Strength or target option field cannot be empty'} />
        );
        return false;
      }
    }
    return true;
  }



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


export const exportJsonFile = (data, title) =>{
  const jsonResult = JSON.stringify(data, null, 2);

  const blob = new Blob([jsonResult], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  const sanitizedTitle = title 
  ? title.replace(/[\/\\:*?"<>|]/g, '').split(' ').join('_') 
  : 'Downloaded_File';

  link.href = url;
  link.download = `${sanitizedTitle}.json`;
  link.click();

  URL.revokeObjectURL(url);
}

