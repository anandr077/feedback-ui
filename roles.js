import { getUserRole } from "./userLocalDetails";
import Cookies from 'js-cookie';

const isTeacher = getUserRole() === 'TEACHER';

export const userRole = () => {
    if (isTeacher) {
        return "TEACHER";
    }
    return Cookies.get('classes') ? "STUDENT" : "NONSCHOOLSTUDENT";
}

