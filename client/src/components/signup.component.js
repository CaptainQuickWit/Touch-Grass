import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { AddUSER } from '../utils/mutations';
import AuthC from '../utils/auth';
import Nav from '../components/Nav';

const Signup = (props) => {
    const [formState, setFormState] = useState({ name: '', email: '', password: ''});
    const [addUser] = useMutation(AddUSER );

    const [showAlert, setShowAlert] = useState(false);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const mutationResponse = await addUser({
                variables: {
                    name: formState.name,
                    email: formState.email,
                    password: formState.password,                    
                },
            });

            const token = mutationResponse.data.addUser.token;
            AuthC.login(token);
        } catch (e) {
            console.error(e);
            setShowAlert(true);
        }
        // clear form values
        setFormState({
            name: '',
            email: '',
            password: '',                        
        });
        if (AuthC.loggedIn) {
        window.location.assign('/LetsPlay');
        } else {
        }
    };

    return (
        <>
            <div >
                <div className="m-0 text-center text-light bg-gradient">
                    <nav class="navbar navbar-dark bg-gradient">
                        <Nav />
                    </nav>
                </div>
                <div >
                    <div >
                        <h3>Sign Up</h3>

                        <form onSubmit={handleFormSubmit}>

                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control"
                                    placeholder="John Doe"                                    
                                    name="name"
                                    type="text"
                                    id="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                />
                            </div>

                            <br></br>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="email"
                                    className="form-control"
                                    placeholder="johndoe@aol.com"                                    
                                    name="email"                                    
                                    id="email"
                                    value={formState.email}
                                    onChange={handleChange} />
                            </div>

                            <br></br>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control"                                    
                                    placeholder="******"
                                    name="password"
                                    type="password"
                                    id="pwd"
                                    value={formState.password}
                                    onChange={handleChange} />
                            </div>

                            <br></br>

                            <button type="submit" className="btn btn-success btn-block">Sign Up</button>
                            <p className="forgot-password text-right">
                                Already registered <a href="/sign-in">sign in?</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;
