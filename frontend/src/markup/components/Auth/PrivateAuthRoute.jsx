import { useEffect, useState } from 'react';
import {getAuth} from '../../../util/auth';
import { Navigate } from 'react-router-dom';

const PrivateAuthRoute = ({ roles, children }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        const loggedInEmployee = getAuth();
        loggedInEmployee.then((response) => {
            if (response.employee_token) {
                setIsLogged(true);

                if(roles && roles.length > 0 && roles.includes(response.employee_role)) {
                    setIsAuthorized(true);        
                }
            }
            setIsChecked(true);
        });
    }, [roles]);

    if (isChecked) {
        if (!isLogged) {
            return <Navigate to="/login" />;
        }
        if (!isAuthorized) {
            return <Navigate to="/unauthorized" />;
        }
    }
    return children;
};

export default PrivateAuthRoute;
