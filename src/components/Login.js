import React from 'react';
import { useAuth } from '../context/AuthContext';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import google from '../images/google.svg';

toast.configure();

const Home = () => {
    const { setUser } = useAuth();
    const history = useHistory();

    function loginWithGoogle() {
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                setUser(result.user);
                history.push('/main')
                toast.success(`Welcome ${result.user.displayName}`, { position: toast.POSITION.TOP_CENTER, autoClose: 2500 })
            }).catch((error) => {
                console.log(error)
            });
    }

    return (
        <>
            <button onClick={loginWithGoogle} className="btn btn-light btn-sm ml-auto rounded-0"><img src={google} alt="search" style={{ width: '20px', marginRight: '10px' }} />Login with Google</button>
        </>
    );
};

export default Home;