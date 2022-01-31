import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h1>Please Register</h1>
            <form action="">
                <input type="email"/> 
                <br />
                <input type="password"/>
                <br />
                <input type="submit" value="Submit" />
            </form>
            <Link to="/login">Already Register?</Link>
        </div>
    );
};

export default Register;