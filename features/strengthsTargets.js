export const createMenuItems = (strengthsAndTargets, type) => {
  let idCounter = 1;
  const result = [];

  strengthsAndTargets.forEach((section) => {
    let itemsForType = [];

    if (type === 'strengths' && section.strengths) {
      itemsForType = section.strengths.map((strength) => ({
        id: idCounter++,
        name: strength,
        type: 'strengths',
        heading: section.title,
      }));
    }

    if (type === 'targets' && section.targets) {
      itemsForType = section.targets.map((target) => ({
        id: idCounter++,
        name: target,
        type: 'targets',
        heading: section.title,
      }));
    }

    if (itemsForType.length > 0) {
      result.push({
        heading: section.title,
        items: itemsForType,
      });
    }
  });
  return result;
};
