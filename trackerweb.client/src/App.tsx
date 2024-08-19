import React, { useState, useEffect } from 'react';
import HomePage from './HomePage'; // Correct path to the HomePage component
import Login from './Login';
import CreateAccount from './CreateAccount';

const App: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [isCreatingAccount, setIsCreatingAccount] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleCreateAccount = () => {
        setIsCreatingAccount(true);
    };

    const handleAccountCreated = () => {
        setIsCreatingAccount(false);
    };

    const updateFavicon = (href: string) => {
        let link: HTMLLinkElement | null = document.querySelector("link[rel='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.head.appendChild(link);
        }
        link.href = href;
    };

    useEffect(() => {
        document.title = "Team Tracker \u00A9 2024";
        updateFavicon('/vite.svg'); 
    }, []);

    return (
        <div>
            {isLoggedIn ? (
                <div className="App" >
                    <HomePage />
                </div>
            ) : isCreatingAccount ? (
                <CreateAccount onAccountCreated={handleAccountCreated} />
            ) : (
                <Login onLogin={handleLogin} onCreateAccount={handleCreateAccount} />
            )}
        </div>
    );
};

export default App;

//import React from 'react';
//import CreateAccount from './CreateAccount';

//const App: React.FC = () => {
//    return (
//        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', overflowY: 'auto' }}>
//            <CreateAccount onAccountCreated={() => { /* Just a placeholder */ }} />
//        </div>
//    );
//};

//export default App;
