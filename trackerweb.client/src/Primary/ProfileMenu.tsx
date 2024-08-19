import React, { useState } from 'react';
import './ProfileMenu.css';

interface ProfileMenuProps {
    username: string;
    profilePic?: string | null; // Optional prop for the profile picture
    onLogout: () => void;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({ username, profilePic, onLogout }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="profile-menu">
            {profilePic ? (
                <img
                    src={profilePic}
                    alt="Profile Pic"
                    className="profile-pic"
                    onClick={handleMenuToggle}
                />
            ) : (
                    <svg className="profile-pic" viewBox="0 0 24 24" width="25"
                        height="25" onClick={handleMenuToggle}>
                    <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" fill="#FFB612" />
                </svg>
            )}
            {menuOpen && (
                <div className="menu-dropdown">
                    <span className="username">{username}</span>
                    <button className="logout-button" onClick={onLogout}>
                        Log out
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProfileMenu;
