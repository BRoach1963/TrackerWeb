import React, { useState } from 'react';
import './CreateAccount.css';

const CreateAccount: React.FC<{ onAccountCreated: () => void }> = ({ onAccountCreated }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginId, setLoginId] = useState('');
    const [phone, setPhone] = useState('');
    const [profilePic, setProfilePic] = useState<string | ArrayBuffer | null>(null);

    const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePic(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Account Created:', { firstName, lastName, email, password, loginId, phone, profilePic });
        onAccountCreated();
    };

    return (
        <div>
            <header className="header">
                <div className="logo-container">
                    <svg className="logo" viewBox="0 0 24 24" width="30" height="30">
                        <path d="M22,5.5A3.5,3.5 0 0,0 18.5,2A3.5,3.5 0 0,0 15,5.5V6A3,3 0 0,1 12,9C10,9 9,6 6,6A4,4 0 0,0 2,10V11H4V10A2,2 0 0,1 6,8C6.86,8 7.42,8.45 8.32,9.24C9.28,10.27 10.6,10.9 12,11A5,5 0 0,0 17,6V5.5A1.5,1.5 0 0,1 18.5,4A1.5,1.5 0 0,1 20,5.5C19.86,6.35 19.58,7.18 19.17,7.94C18.5,9.2 18.11,10.58 18,12C18.09,13.37 18.5,14.71 19.21,15.89C19.6,16.54 19.87,17.25 20,18A2,2 0 0,1 18,20A2,2 0 0,1 16,18A3.75,3.75 0 0,0 12.25,14.25A3.75,3.75 0 0,0 8.5,18V18.5A1.5,1.5 0 0,1 7,20A3,3 0 0,1 4,17V15H6V13H0V15H2V17A5,5 0 0,0 7,22A3.5,3.5 0 0,0 10.5,18.5V18A1.75,1.75 0 0,1 12.25,16.25A1.75,1.75 0 0,1 14,18A4,4 0 0,0 18,22A4,4 0 0,0 22,18C22,16 20,14 20,12C20,10 22,7.5 22,5.5Z" fill="#FFB612" />
                    </svg>
                    <span className="title">Team Tracker</span>
                </div>
            </header>
            <div className="create-account">
                <h2>Create Account</h2>
                <div className="profile-pic-container">
                    {profilePic ? (
                        <img src={profilePic as string} alt="Profile Pic" className="profile-pic" />
                    ) : (
                        <svg className="profile-pic" viewBox="0 0 24 24">
                            <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" fill="#FFB612" />
                        </svg>
                    )}
                    <input
                        type="file"
                        id="profile-pic-input"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleProfilePicChange}
                    />
                    <label htmlFor="profile-pic-input" className="profile-pic-change-button">
                        <svg viewBox="0 0 24 24" width="24" height="24">
                            <path d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" fill="#FFB612" />
                        </svg>
                        <span className="tooltip">Change Profile Picture</span>
                    </label>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>First Name:</label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Email Address:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Login ID:</label>
                        <input
                            type="text"
                            value={loginId}
                            onChange={(e) => setLoginId(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Phone:</label>
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="create-account-actions">
                        <button type="submit">Create Account</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateAccount;
