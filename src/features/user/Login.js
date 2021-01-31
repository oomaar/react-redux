import React from 'react';
import { useDispatch } from "react-redux";
import { setUser, logout } from "./userSlice";

export default function Login() {
    const dispatch = useDispatch();

    const loginToApp = () => {
        dispatch(setUser({ user: "omaar_5" }));
    }

    return (
        <div>
            <h1 style={{ fontSize: 70 }}>I'm The Login Component</h1>
            <button onClick={loginToApp}>Login</button>
            <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
    )
}
