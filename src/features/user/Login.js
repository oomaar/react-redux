import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setUser, logout, selectUser } from "./userSlice";

export default function Login() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const loginToApp = () => {
        dispatch(setUser({ user: "omaar_5" }));
    };
    
    return (
        <div>
            <h1 style={{ fontSize: 70 }}>I'm The Login Component</h1>
            {user ? <h2>{user} Logged in</h2> : <h2>No Body Logged in</h2>}
            <button onClick={loginToApp}>Login</button>
            <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
    )
}
