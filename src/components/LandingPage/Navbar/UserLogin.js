// import React, { useState } from 'react';
// import app from '../../Firebase/Firebase.init';
// import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
// const auth = getAuth(app);

// const UserLogin = () => {
//     const googleprovider = new GoogleAuthProvider();
//     const githubprovider = new GithubAuthProvider();

//     const [user, setUser] = useState({});


//     const handlegooglesignin = () => {
//         signInWithPopup(auth, googleprovider)
//             .then(result => {
//                 const user = result.user;
//                 setUser(user);
//                 console.log(user);
//             })
//             .catch(error => {
//                 console.log("error", error);
//             })
//     };
//     const handleGithubsignin = () => {
//         signInWithPopup(auth, githubprovider)
//             .then(result => {
//                 const user = result.user;
//                 setUser(user);
//                 console.log(user);
//             })
//             .catch(error => {
//                 console.log("error", error);
//             });
//     };


//     const handleLogout = () => {
//         signOut(auth)
//             .then(() => {
//                 setUser({})
//             })
//             .catch(() => {
//                 setUser({})
//             })

//     }
//     return (
//         <div>

//             {/* {user.uid ?
//                 <button onClick={handleLogout}>Logout</button> :
//                 <div>
//                     <button onClick={handlegooglesignin}>LogIn With Google</button>
//                     <button onClick={handleGithubsignin}>LogIn With Github</button>
//                 </div>
//             }
//             {user.displayName}
//             {user.email}
//             <img src={user.photoURL} alt="" /> */}

//         </div>
//     );
// };

// export default UserLogin;