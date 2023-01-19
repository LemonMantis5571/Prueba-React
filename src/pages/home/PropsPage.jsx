import React from 'react';
import { useLocation } from 'react-router-dom';

const PropsPage = () => {

    const location = useLocation();


    return (
        <div>
            <h1>State: {location.state.online ? 'The user is online' : 'The user is offline'}</h1>
        </div>
    );
}

export default PropsPage;
