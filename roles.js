import { getUserRole } from "./userLocalDetails";
import { isNullOrEmpty } from "./utils/arrays";
import Cookies from 'js-cookie';

const isTeacher = getUserRole() === 'TEACHER';

export const userRole = () => {
    if (isTeacher) {
        return "TEACHER";
    }

    const classes = Cookies.get('classes');

    return  isNullOrEmpty(classes) ? "STUDENT" : "NONSCHOOLSTUDENT";
}

