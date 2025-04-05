import React from 'react';
import './assets/styles.css';

export function Footer() {
    return (
        <footer className="Footer">
            <div className="footer-content">
                <h3>SalesSavvy</h3>
                <p>One-stop shop for your needs</p>
            </div>
            <div className="footer-links">
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">Terms of Service</a>
                <a href="#">Privacy Policy</a>
            </div>
            <div className="footer-bootom">
                <p>2025 SalesSavvy. All rights reserved</p>
            </div>
        </footer>
    )
}