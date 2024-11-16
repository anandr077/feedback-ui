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
