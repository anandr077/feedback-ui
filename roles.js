import { getUserRole } from "./userLocalDetails";
import { isNullOrEmpty } from "./utils/arrays";
import Cookies from 'js-cookie';

const isTeacher = getUserRole() === 'TEACHER';

export const userRole = () => {
    if (isTeacher) {
        return "TEACHER";
    }

    const classesCookie = Cookies.get('classes');

    const classes = classesCookie ? JSON.parse(classesCookie) : null;

    return  isNullOrEmpty(classes) ? "NONSCHOOLSTUDENT" : "STUDENT";
}

