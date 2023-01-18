import React from 'react';

import { useNavigate } from 'react-router-dom';


const HomePage = () => {

    const history = useNavigate();

    const navigate = (path) => {
        history(path)
    }

    const goFoward = (e) => {
        history(+1);
        console.log(history(1));
    }




    return (
        <div>
            <h1 style={{color: 'red'}}>Home Page</h1>
            <h1>Dashboard</h1>
            <div>

            <div>
                <button onClick={() => navigate('/')}>Go Home</button>
                <button onClick={goFoward}>Go Next</button>
            </div>
        </div>
        </div>
    );
}

export default HomePage;
