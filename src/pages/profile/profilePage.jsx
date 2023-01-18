import React from 'react';


import { useLocation, useNavigate} from 'react-router-dom';

const ProfilePage = () => {

    const location = useLocation();

    console.log(location.pathname);

    const history = useNavigate();

    const navigate = (path) => {
        history(path)
    }


    const goBack = (e) => {
        e.preventDefault();
        history(-1);
    }


    return (
        <div>
            <h1>Your Profile</h1>
            <button onClick={() => navigate('/tasks')}>Go to Task</button>
            <button onClick={goBack}>Go back</button>
        </div>
    );
}

export default ProfilePage;
