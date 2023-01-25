import React, {useState, useEffect}from 'react';
import { getAllPagedUsers, getAllUsers, getUserDetails, login } from '../../fetchService';

const FetchExample = () => {

    const [users, setusers] = useState([]);
    const [selectedUser, setselectedUser] = useState({});
    const [TotalUsers, setTotalUsers] = useState(0);
    const [pages, setpages] = useState(2);
    const [usersPerPage, setusersPerPage] = useState(6);

    const obtainUsers = () => {
        getAllUsers().then((response) => {

            console.log('All users', response.data);
            setusers(response.data);
            setpages(response.total_pages);
            setusersPerPage(response.per_page);
            setTotalUsers(response.total);
            

        }).catch((error) => {
            alert(`Error while retreiving users ${error}`)

        }).finally(() => {
            console.table(users);
        })
    }

    const obtainPagedUsers = (page) => {
        getAllPagedUsers(page).then((response) => {
            setusers(response.data);
            setpages(response.total_pages);
            setusersPerPage(response.per_page);
            setTotalUsers(response.total);
            console.log(response.data);

        }).catch((error) => {
            alert(`Error while retreiving users ${error}`)

        }).finally(() => {
            console.table(users);
            
        })
    }

    const obtainUserDettails = (id) => {
        getUserDetails(id).then((response) => {
            setselectedUser(response.data);

        }).catch((error) => {
            alert(`Error while retreiving users ${error}`)

        }).finally(() => {
            console.table(selectedUser);
            
        })
    }

    const authUser = () => {
        login('eve.holt@reqres.in', 'cityslicka').then((response) => {
            console.log(response.token);
            console.log(response.status);
            sessionStorage.setItem('token', response.token)

        }).catch((error) => {
            console.log(error);

        }).finally(() => {
            console.log('Enden Login user. Navigate to home');
            
        })
    }

    useEffect(() => {

        obtainUsers();
    }, []);

    console.log(selectedUser);

    return (
        <div>
            <button onClick={authUser}>Login</button>
            <h2>Users:</h2>
            {users.map((user, index) =>

                (<p key={user.id} onClick={() => obtainUserDettails(user.id)}>{user.first_name} {user.last_name}</p>)

            )}
            <p>Showing {usersPerPage} users of {TotalUsers} </p>
            <button onClick={() => obtainPagedUsers(1)}>1</button>
            <button onClick={() => obtainPagedUsers(2)}>2</button>
            <div>
                <h3>
                    User Details
                </h3>
                
                {Object.keys(selectedUser).length !== 0 ? (
                    
                    <div>
                    <p>Name: {selectedUser.first_name}</p>
                    <p>Last Name: {selectedUser.last_name}</p>
                    <p>Email: {selectedUser.email}</p>
                    <img src={selectedUser.avatar} alt='avatar' />
                    </div>) : <h6>Please click on a user to see its Details</h6> }
            </div>

        </div>
    );
}

export default FetchExample;
