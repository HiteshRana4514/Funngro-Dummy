import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"

function Header() {
    const [mobMenu, setMobMenu] = useState(false);
    const location = useLocation();

    return (
        <>
            <header className="header">
                <nav className="navbar">
                    <div className="container">
                        <div className="nav-content">
                            <div className="logo">Funngro</div>
                            <div className={`nav-icons ${mobMenu ? "active":""}`}>
                                <ul className="nav-links">
                                    <li>
                                        <Link 
                                            to="/Funngro-Dummy/" 
                                            className={`nav-link ${location.pathname === "/Funngro-Dummy/" ? "active" : ""}`}
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            to="/Funngro-Dummy/teen" 
                                            className={`nav-link ${location.pathname === "/Funngro-Dummy/teen" ? "active" : ""}`}
                                        >
                                            Teen
                                        </Link>
                                    </li>
                                </ul>
                                <button className="btn-primary login-btn">Company Login</button>
                            </div>
                            <button type="button" className={`mob-menu ${mobMenu ? "active" : ""}`} onClick={()=>setMobMenu(!mobMenu)}>
                                <span className="line"></span>
                                <span className="line"></span>
                                <span className="line"></span>
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header