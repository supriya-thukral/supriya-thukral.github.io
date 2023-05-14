import Button from '@material-ui/core/Button';
import React from 'react';
import { customStyle } from './styles';

interface TopNavItemProps {
    href: string;
    text: string;
}

const TopNavItem: React.FC<TopNavItemProps> = ({ href, text }) => {
    const handleItemClick = () => {
        window.location.href = href;
    };


    return (
        <Button color="inherit" onClick={handleItemClick} className={customStyle().customButton} >
            {text}
        </Button>
    );
};

export default TopNavItem;
