import React from 'react';

import { useLocation, useNavigate} from 'react-router-dom';

const AboutPage = () => {

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

    const goFoward = (e) => {
        history(+1);
    }

    return (
        <div>
            <h1>
                About | FAQs Page
            </h1>
            <div>
                <button onClick={() => navigate('/')}>Go Home</button>
                <button onClick={goBack}>Go Back</button>
                <button onClick={goFoward}>Go Next</button>
            </div>
        </div>
    );
}

export default AboutPage;
