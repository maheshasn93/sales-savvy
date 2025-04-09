import React from "react";
import {CartIcon} from './CartIcon';
import { ProfileDropdown } from "./ProfileDropDown";
import Logo from './Logo';
import "./assets/styles.css";


export default function Header ({cartCount, username}) {
    return(
        <header className="header">
            <div className="header-content">
                <Logo/>
                <div className="header-actions">
                    <CartIcon cont={cartCount}/>
                    <ProfileDropdown username={username}/>
                </div>
            </div>
        </header>
    );
}
