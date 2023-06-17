import React from 'react';
import TopNavItem from './TopNavItem';

const TopNav: React.FC = () => {
    const navItems = [
        { href: '/', text: 'Home' },
        { href: '/about', text: 'About' },
        { href: '/portfolio', text: 'Portfolio' },
        { href: '/contact', text: 'Contact' },
    ];

    return (
        <nav className="top-nav-container">
            {navItems.map((item) => (
                <div className="top-nav-item" key={item.href}>
                    <TopNavItem href={item.href} text={item.text} />
                </div>
            ))}
        </nav>
    );
};

export default TopNav;
