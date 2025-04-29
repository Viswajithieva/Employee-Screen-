import React, { useState } from "react";
import "./Login.css";

function Login() {
    const [eamil, Eamil] = useState('');
    const [password, setpassword] = useState('');

    const handlesudmit = (e) => {
        e.preventDefault();
        console.log('Email:', eamil);
        console.log('Password:', password);
        const [error, setError] = useState('');
    };

    return (
        <div id="login">
            <h1 id="h1">Welcome Back!</h1>
            <h2 id="h2">Sign in to</h2>
            <p>Lorem Ipsum is simply</p>
            <form onSubmit={handlesudmit} >
                <label id="label" htmlFor="Email">Email</label><br />
                <input id="input" type="eamil" placeholder="Email" value={Eamil}
                    onChange={(e) => setUsername(e.target.value)} required /><br></br>
                <label id="label" htmlFor="Password">Password</label><br />
                <input id="input" type="password" placeholder="Password" value={password}
                    onChange={(e) => setpassword(e.target.value)} /><br></br>
                <button  id="button" type="submit" >Login</button><br></br>
                <link to ="/Signup">Create Account</link>
            </form>
        </div>
    )

}

export default Login;