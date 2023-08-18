import sun from "./sun.svg";
import Moon from "./Moon.svg";

import "./style.css"

const BtnDarkMode = () => {
    return (
        <button className="dark-mode-btn">
            <img src={sun} alt="Light mode" className="dark-mode__icon" />
            <img src={Moon} alt="Dark mode" className="dark-mode__icon" />
        </button>
    );
}

export default BtnDarkMode;