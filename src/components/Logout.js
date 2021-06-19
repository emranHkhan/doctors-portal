import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory } from 'react-router-dom';

const Logout = () => {
    const history = useHistory();
    function handleLogout() {
        firebase.auth().signOut().then(() => {
            console.log('signout successful')
            history.push('/')

        }).catch((error) => {
            console.log(error.message)
        })
    }
    return (
        <>
            <button onClick={handleLogout} className="ml-auto btn btn-light btn-sm rounded-0"><i class="fas fa-sign-out-alt pr-2 text-success"></i>Log Out</button>
        </>
    );
};

export default Logout;