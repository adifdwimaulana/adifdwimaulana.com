import React from 'react';
import Button from 'components/Button';

export default function Header(props) {
    const getNavLinkClass = path => {
        return props.location.pathname = path ? "active" : ""
    }
    return (
        <header className="spacing-sm">
            <div className="container">
                <nav className="navbar navbar-expand-md navbar-light">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto ml-auto">
                            <li className={`nav-item${getNavLinkClass("/")}`} >
                                <Button className="nav-link" type="link" href="/">
                                    Home
                                </Button>
                            </li>
                            <li className={`nav-item${getNavLinkClass("/about")}`} >
                                <Button className="nav-link" type="link" href="/about">
                                    About
                                </Button>
                            </li>
                            <li className={`nav-item${getNavLinkClass("/portfolio")}`} >
                                <Button className="nav-link" type="link" href="/porfolio">
                                    Portfolio
                                </Button>
                            </li>
                            <li className={`nav-item${getNavLinkClass("/blog")}`} >
                                <Button className="nav-link" type="link" href="/blog">
                                    Blog
                                </Button>
                            </li>
                            <li className={`nav-item${getNavLinkClass("/contact")}`} >
                                <Button className="nav-link" type="link" href="/contact">
                                    Contact
                                </Button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

        </header>
    )
}