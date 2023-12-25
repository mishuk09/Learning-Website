import React from 'react';
import app from '../../Firebase/Firebase.init';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
const auth = getAuth(app);

const UserLogin = () => {
    const provider = new GoogleAuthProvider();

    const handlegooglesignin = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log("error", error);
            }) 
    }
    return (
        <div>
            <button onClick={handlegooglesignin}>LogIn</button>
        </div>
    );
};

export default UserLogin;