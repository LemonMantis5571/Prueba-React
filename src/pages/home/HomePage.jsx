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

    const navigateProps = (path) => {
        history({pathname:path, search: 'online-true'}, {state: {
            online: true
        }})

    }


    console.log(navigateProps);



    return (
        <div>
            <h1 style={{color: 'red'}}>Home Page</h1>
            <h1>Dashboard</h1>
            <div>

            <div>
                <button onClick={() => navigateProps('/online-state')}>Go To page with State</button>
                <button onClick={goFoward}>Go Next</button>
            </div>
        </div>
        </div>
    );
}

export default HomePage;
