import sun from "./../../img/icons/sun.svg";
import Moon from "./../../img/icons/Moon.svg";

import { NavLink } from "react-router-dom";

import "./style.css"

const Navbar = () => {
    return (
        <nav class="nav">
            <div className="container">
                <div className="nav-row">

                    <NavLink to="/" className="logo">
                        <strong>Freelancer</strong> portfolio
                    </NavLink>

                    <button className="dark-mode-btn">
                        <img src={sun} alt="Light mode" className="dark-mode__icon" />
                        <img src={Moon} alt="Dark mode" className="dark-mode__icon" />
                    </button>

                    <ul className="nav-list">

                        <li className="nav-list__item">

                            <NavLink to="/" className="nav-list__link">
                                Home
                            </NavLink>

                        </li>
                        <li className="nav-list__item">

                            <NavLink to="/" className="nav-list__link">
                                Projects
                            </NavLink>

                        </li>
                        <li className="nav-list__item">

                            <NavLink className="nav-list__link">
                                Contacts
                            </NavLink>

                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
