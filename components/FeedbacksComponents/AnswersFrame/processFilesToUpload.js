import { toast } from 'react-toastify';
import heic2any from 'heic2any';
import Toast from '../../Toast';

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_TYPES = [
    'image/jpeg',
    'image/png',
    'image/heic',
    'image/heif',
    'application/pdf'
];

export async function processFiles(files) {
    const validFiles = [];

    for (const file of files) {
        if (file.size > MAX_FILE_SIZE) {
            toast(<Toast message={`${file.name} exceeds 5mb file size limit`} />);
            continue;
        }

        let fileType = file.type;

        if (!fileType) {
            const fileExtension = file.name.split('.').pop().toLowerCase();
            if (['heic', 'heif'].includes(fileExtension)) {
                fileType = 'image/heic';
            } else if (['jpg', 'jpeg'].includes(fileExtension)) {
                fileType = 'image/jpeg';
            } else if (fileExtension === 'png') {
                fileType = 'image/png';
            } else if (fileExtension === 'pdf') {
                fileType = 'application/pdf';
            }
        }

        if (!ALLOWED_TYPES.includes(fileType)) {
            toast(<Toast message={`Only .pdf, .jpeg, .png or .heic/.heif files are accepted, please convert and try again`} />);
            continue;
        }

        let processedFile = file;

        console.log('the file type is')

        if (fileType === 'image/heic' || fileType === 'image/heif') {
            try {
                const blob = await heic2any({ blob: file, toType: 'image/jpeg' });
                processedFile = new File([blob], `${file.name.split('.')[0]}.jpeg`, { type: 'image/jpeg' });
            } catch (error) {
                console.error("Error converting HEIC/HEIF to JPEG:", error);
                toast(<Toast message={`Error converting ${file.name}. Please try again.`} />);
                continue;
            }
        }

        console.log('the file type is', processedFile)

        validFiles.push(processedFile);
    }
    return validFiles;
}