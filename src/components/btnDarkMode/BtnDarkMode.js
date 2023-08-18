import { useState } from "react";
import sun from "./sun.svg";
import Moon from "./Moon.svg";

import "./style.css"

const BtnDarkMode = () => {

    const [darkMode, setDarkMode] = useState('light');

    const toggleDarkMode = () => {
        setDarkMode((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light'
        })
    }

    return (
        <button button className="dark-mode-btn" onClick={toggleDarkMode} >
            <img src={sun} alt="Light mode" className="dark-mode__icon" />
            <img src={Moon} alt="Dark mode" className="dark-mode__icon" />
        </button >
    );
}

export default BtnDarkMode;