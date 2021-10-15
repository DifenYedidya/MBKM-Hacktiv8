import React from 'react';
import DiscordLogoWordmarkWhite from '../img/DiscordLogoWordmarkWhite.svg'
import {
    Image,
    Flex,
    Box
  } from 'rebass/styled-components';
import styled from 'styled-components';

const ButtonNavbar = styled.button`
    background-color: #fff;
    color: #000;
    border-radius: 20px;
    padding: 12px;
    width: 120px;
`

function NavbarHero() {
    return ( 
        <Flex className='navbar'
            flexWrap='wrap'
            px={2}
        >
            <Box
            px={2} py={2} width={1/3}
            >
            <Image
                src={DiscordLogoWordmarkWhite}
                variant='logo'
            />
            </Box>
            <Box
            px={2} py={2} width={1/3}
            >
            <div className='navbarLink'>
                <a className='link-item pointer' variant='nav' href='#!'>Download</a>
                <a className='link-item pointer' variant='nav' href='#!'>Nitro</a>
                <a className='link-item pointer' variant='nav' href='#!'>Safety</a>
                <a className='link-item pointer' variant='nav' href='#!'>Support</a>
                <a className='link-item pointer' variant='nav' href='#!'>Blog</a>
            </div>
            </Box>
            <Box
            px={2} py={2} width={1/3}
            >
                <ButtonNavbar 

                >Open Discord</ButtonNavbar>
            </Box>
        </Flex>
     );
}

export default NavbarHero;