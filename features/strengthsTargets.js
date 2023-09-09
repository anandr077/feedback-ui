export const createMenuItems = (strengthsAndTargets, type) => {
    console.log('strengthsAndTargets data: ', strengthsAndTargets);
    let idCounter = 1;
    const result = [];
  
    strengthsAndTargets.forEach((section) => {
      let itemsForType = [];
  
      if (type === 'strengths' && section.strengths) {
        itemsForType = section.strengths.map((strength) => ({
          id: idCounter++,
          name: strength,
          type: 'strengths',
          heading: section.title
        }));
      }
  
      if (type === 'targets' && section.targets) {
        itemsForType = section.targets.map((target) => ({
          id: idCounter++,
          name: target,
          type: 'targets',
          heading: section.title
        }));
      }
  
      if (itemsForType.length > 0) {
        result.push({
          heading: section.title,
          items: itemsForType,
        });
      }
    });
    console.log('result: ', result);
    return result;
  };