import React from 'react';
import {Button} from 'rebass';
import styled from 'styled-components';

const ButtonStyled = styled.button`
    border-radius: 20px;
    color: #000;
    background-color: #fff;
    margin-top: 24px;
    margin-right: 24px;
    font-size: 14px;
    padding: 16px 32px;
    width: 300px;
`

const ButtonStyledBlack = styled.button`
    border-radius: 20px;
    color: #fff;
    background-color: #000;
    margin-top: 24px;
    margin-right: 24px;
    font-size: 14px;
    padding: 16px 32px;
    width: 300px;
`
function ButtonHero() {
    return ( 
        <div>
            <ButtonStyled className='button-195cDm'>Download for Windows</ButtonStyled>
            <ButtonStyledBlack className='button-195cDm'>
                Open Discord in your browser
            </ButtonStyledBlack>
        </div>
     );
}

function DownloadHero(){
    return (
        <div>
            <Button className='button-195cDm'
                color='#fff'
                backgroundColor='#5865f2'
                marginTop='24px'
                marginRight='24px'
                fontSize='14px'
                padding='16px 32px'
                width='300px'
            >
            Download for Windows
            </Button>
        </div>
    )
}

export {ButtonHero, DownloadHero};
