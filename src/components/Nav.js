import React from 'react';
import Logout from './Logout';
import Login from './Login'
import { useAuth } from '../context/AuthContext';



const Nav = () => {
    const { user } = useAuth();

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <h1 className="mt-1 navbar-brand text-white text-uppercase">Docotors <span className="text-warning">Portal</span></h1>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {user?.email ? <Logout /> : <Login />}
            </div>
        </nav>


    );
};

export default Nav;