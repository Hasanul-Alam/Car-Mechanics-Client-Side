import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user
      ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const navigateLogin = () =>{
        navigate('/login');
    }

    if(user){
        navigate('/home');
    }

    const handleRegister = event =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='register-form mt-3'>
            <h2 className='text-primary' style={{textAlign: 'center'}}>Please Register</h2>
            <form className='w-75 mx-auto' onSubmit={handleRegister}>
                <input className='form-control' type="text" name="name" id="" placeholder='Your Name'/>
                
                <input className='form-control' type="email" name="email" id="" placeholder='Email Address' required/>
                
                <input className='form-control' type="password" name="password" id="" placeholder='Password' required/>
                <input className='btn btn-primary w-25 mx-auto' type="submit" value="Register" />
            </form>
            <p className='text-center'>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
        </div>
    );
};

export default Register;