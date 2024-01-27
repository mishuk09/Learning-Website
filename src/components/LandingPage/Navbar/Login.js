// import React from 'react';
// import { useAuth0 } from "@auth0/auth0-react";


// const Login = ({ handleLoginToAnother }) => {
//     const { user, loginWithRedirect, isAuthenticated, logout, isLoading } = useAuth0();
//     console.log(user);
//     if (isLoading) {
//         return <div>Loading ...</div>;
//     }
//     return (
//         <div>
//             {
//                 isAuthenticated ? (
//                     <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
//                         Log Out
//                     </button>
//                 ) : (
//                     <button onClick={(e) => handleLoginToAnother(loginWithRedirect)}>Log In</button>

//                 )
//             }
//             {isAuthenticated && (
//                 <div>
//                     <img src={user.picture} alt={user.name} />
//                     <h2>{user.name}</h2>
//                     <p>{user.email}</p>
//                 </div>
//             )}
//         </div>
//     );

// }
// export default Login;


import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from 'react-router-dom';

const Login = () => {
    const { user, loginWithRedirect, isAuthenticated, logout, isLoading } = useAuth0();
    // const history = useHistory();

    console.log(user);

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    const handleLogin = () => {
        loginWithRedirect({
            redirectUri: window.location.origin, // Specify the redirect URI
        });
    };

    const handleLogout = () => {
        logout({ logoutParams: { returnTo: window.location.origin } });
    };

    return (
        <div>
            {isAuthenticated ? (
                <div>
                    <button onClick={handleLogout}>Log Out</button>
                    <div>
                        <img src={user.picture} alt={user.name} />
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </div>
                </div>
            ) : (
                <button onClick={handleLogin}>Log In</button>
            )}
        </div>
    );
};

export default Login;
