import React, { useState } from "react";
import "./Sign.css";

function Signup() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirm_password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Signup Data:", formData);

        try {
            const response = await fetch("/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Signup successful!");
            } else {
                alert("Signup failed!");
            }
        } catch (error) {
            console.error("Error during signup:", error);
        }
    };

    return (
        <div  id="signup">
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} required /><br />

                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required /><br />

                <label>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required /><br />

                <label>Confirm Password</label>
                <input type="password" name="confirm_password" value={formData.confirm_password} onChange={handleChange} required /><br />

                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

export default Signup;
