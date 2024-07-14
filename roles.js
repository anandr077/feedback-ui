import { getUserRole } from "./userLocalDetails";
import { isNullOrEmpty } from "./utils/arrays";
import Cookies from 'js-cookie';
import { getLocalStorage } from "./utils/function";

const isTeacher = getUserRole() === 'TEACHER';

export const userRole = () => {
    if (isTeacher) {
        return "TEACHER";
    }

    const classesCookie = getLocalStorage('classes');

    const classes = classesCookie ? classesCookie : null;

    return  isNullOrEmpty(classes) ? "NONSCHOOLSTUDENT" : "STUDENT";
}

