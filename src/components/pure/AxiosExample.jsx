import React, {useState} from 'react';

import getRandomUser from '../../services/axios-service';

const AxiosExample = () => {

    const [user, setuser] = useState({});



    const obtainUser = () => {
        getRandomUser().then((response) => {
            console.log(response.data.results[0])
            if(response.status === 200){
                setuser(response.data.results[0]);
            }
            
        })
        .catch((error) => alert(error))
    }

    return (
        <div>
            <h1>Axios Example</h1>
            {Object.keys(user).length !== 0 ? (
                <div>
                    <img alt='avatar' src={user.picture.large}></img>
                    <h2>
                        {user.name.title} {user.name.first} {user.name.last}
                    </h2> 
                    <h3> {user.email}</h3>
                </div>
            ) : null}
            <button onClick={obtainUser}>Generate Random User</button>
        </div>
    );
}

export default AxiosExample;
