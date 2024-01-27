import React from 'react';
import { useAuth } from '../../Authentication/AuthContext';


const UserProfile = () => {
    const { user } = useAuth();

    if (!user) {
        // Handle the case when the user is not authenticated
        return <p>Please log in to view your profile.</p>;
    }

    // Render user profile information
    return (
        <div>
            <h2>Welcome, {user.name}!</h2>
            {/* Other user profile details */}
        </div>
    );
};

export default UserProfile;
