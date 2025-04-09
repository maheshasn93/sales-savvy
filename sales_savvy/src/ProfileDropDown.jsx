import React, { useState } from "react";
import userImage from "./user-image.png"; // fix here
import './assets/styles.css';

export function ProfileDropdown({ username }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);
    
    const handleLogout = () => {
        console.log("User logged out");
    };

    return (
        <div className="profile-dropdown">
            <button onClick={toggleDropdown}> {/* fix here */}
                <img src={userImage} alt="User Avatar" className="logo-container" style={{ width: '40px', height: '40px' }}/><br/>
                {username || "Guest"}
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    <a href="#">Profile</a>
                    <a href="#">Orders</a>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}
        </div>
    );
}
