
import { useEffect, useState } from 'react';
import Rename from '../static/img/Rename.svg';
import Copy from '../static/img/Copy.svg';
import TabsDelete from '../static/img/tabs-delete.svg';
import DownloadCommentBankIcon from '../static/img/Download.svg';
import Preview from '../static/img/preview.svg';


function resizeImage(url, width, height) {
  return new Promise((resolve) => {
    const img = new Image();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    img.onload = () => {
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL());
    };

    img.src = url;
  });
}

let resizedIcons = null;


export const useResizedImage = () => {
  const [icons, setIcons] = useState(null);

  useEffect(() => {
    const prepareImages = async () => {
      const resizedExport = await resizeImage(DownloadCommentBankIcon, 20, 20);
      const resizedRename = await resizeImage(Rename, 20, 20);
      const resizedCopy = await resizeImage(Copy, 20, 20);
      const resizedDelete = await resizeImage(TabsDelete, 20, 20);
      const resizedPreview = await resizeImage(Preview, 20, 20);

      resizedIcons = {
        export: resizedExport,
        rename: resizedRename,
        copy: resizedCopy,
        delete: resizedDelete,
        preview: resizedPreview,
      };

      setIcons(resizedIcons); 
    };

    if (!resizedIcons) {
      prepareImages();
    } else {
      setIcons(resizedIcons); 
    }
  }, []);

  return icons;
};
