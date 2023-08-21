import { useEffect, useRef } from "react";
import { useLocalStorage } from "../../utils/useLocalStorage";
import detectDarkMode from "../../utils/detectDarkMode";
import "./style.css"

import sun from "./sun.svg";
import Moon from "./Moon.svg";


const BtnDarkMode = () => {


    const [darkMode, setDarkMode] = useLocalStorage('dark', detectDarkMode())
    const btnRef = useRef(null);


    useEffect(() => {
        if (darkMode === 'dark') {
            document.body.classList.add('dark')
            btnRef.current.classList.add('dark-mode-btn--active')
        } else {
            document.body.classList.remove('dark')
            btnRef.current.classList.remove('dark-mode-btn--active')
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light'
        })
    }

    return (
        <button ref={btnRef} button className="dark-mode-btn" onClick={toggleDarkMode} >
            <img src={sun} alt="Light mode" className="dark-mode__icon" />
            <img src={Moon} alt="Dark mode" className="dark-mode__icon" />
        </button >
    );
}

export default BtnDarkMode;