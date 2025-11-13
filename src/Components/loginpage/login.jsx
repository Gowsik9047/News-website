import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef, useState } from "react";

function LoginPage({ loginDatasender }) {
    const [username, password, email] = [useRef(null), useRef(null), useRef(null)];
    function onChange(event) {
        event.preventDefault();
        console.log(username.current.value);
        console.log(password.current.value);
        console.log(email.current.value);
        const user = username.current.value;
        const pass = password.current.value;
        const mail = email.current.value;
        if (!user || !pass || !mail) {
            toast.error("Please enter username ,Mail and password!", {
                position: "top-right",
                autoClose: 2000,
                theme: "colored",
            });
            return;
        }

        if (pass.length < 10) {
            toast.warn("Password must be at least 10 characters long!", {
                position: "top-right",
                autoClose: 2500,
                theme: "colored",
            });
            return;
        }

        toast.success("Login successfully!", {
            position: "top-right",
            autoClose: 2000,
            theme: "colored",
        });
        setTimeout(() => {
            loginDatasender(username);
        }, 3000);
    }

    return (
        <div className="login-container">
            <form className="login-form">
                <h2>Login</h2>
                <input type="text" name="username" placeholder="Enter Your Name" required ref={username} />
                <input type="email" name="email" placeholder="Enter Your Email" required ref={email} />
                <input type="password" name="password" placeholder="Enter Your Password" required ref={password} />
                <button type="submit" onClick={onChange}>Login</button>
            </form>
            <ToastContainer />
        </div>

    )
}

export default LoginPage;