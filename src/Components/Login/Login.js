import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hook/useFirebase';

const Login = () => {
    const {signinWithGoogle, signinUsingGithub}=useFirebase()
    return (
        <div>
            <h1>Plese Login</h1>
            <button onClick={signinWithGoogle}>Google Sign in</button>
            <button onClick={signinUsingGithub}>Signin with Github</button>
            <br />

            <Link to="/register">New User?</Link>
        </div>
    );
};

export default Login;