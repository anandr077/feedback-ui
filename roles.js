import { getUserRole } from "./userLocalDetails";
import { isNullOrEmpty } from "./utils/arrays";
import { useClassData } from "./components/state/hooks";

const isTeacher = getUserRole() === 'TEACHER';

export const userRole = () => {
    const { data: classData, isLoadingdata: isLoadingclassData } = useClassData();
    if (isTeacher) {
        return "TEACHER";
    }

    const classes = !isNullOrEmpty(classData) ? classesCookie : null;

    return  isNullOrEmpty(classes) ? "NONSCHOOLSTUDENT" : "STUDENT";
}

