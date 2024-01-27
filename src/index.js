// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Auth0Provider } from '@auth0/auth0-react';

// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Auth0Provider
//         domain="dev-h7k8320uxzw1wuqw.jp.auth0.com"
//         clientId="5I1igxwlKt6DagyHz7uYlJlAcITws3xP"
//         authorizationParams={{
//           redirect_uri: window.location.origin
//         }}
//       >
//         <App />
//       </Auth0Provider>,
//     </BrowserRouter>
//   </React.StrictMode>
// );



import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';

import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './components/Authentication/AuthContext';
// Import AuthProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-h7k8320uxzw1wuqw.jp.auth0.com"
        clientId="5I1igxwlKt6DagyHz7uYlJlAcITws3xP"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        {/* Wrap App component with AuthProvider */}
        <AuthProvider>
          <App />
        </AuthProvider>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);

