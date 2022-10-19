import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import { FaHeart } from "react-icons/fa";

import { Container } from './styles';

interface Props {
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
    const {colors, title} = useContext(ThemeContext) ;

    return (
        <Container>
           Meissie Brand 
        <FaHeart />  
        <Switch
        onChange= {toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={colors.secundary}
        onColor={shade(0.20, colors.primary)}
        />
        </Container>
    );
};

export default Header;