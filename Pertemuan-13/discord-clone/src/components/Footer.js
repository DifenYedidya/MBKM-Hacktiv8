import React from 'react';
import {
    Heading,
    Box,
    Button

} from 'rebass';
import '../App.css';

function Footer() {
    return(
        <div className='footer'>
            <div className='row'
                flexWrap='wrap'
                px={2}
                py={3}
            >
                <Box px={2} py={2} width={2/6}>        
                    <Heading
                        color='#404eed'
                        width='280px'
                        height='60px'
                    >
                        IMAGINE A PLACE
                    </Heading>
                </Box>
                <Box px={2} py={2} width={1/6}>
                    PRODUCT
                </Box>
                <Box px={2} py={2} width={1/6}>
                    COMPANY
                </Box>
                <Box px={2} py={2} width={1/6}>
                    RESOURCES
                </Box>
                <Box px={2} py={2} width={1/6}>
                    POLICIES
                </Box>
                
            </div>
        </div>
    )
}

export default Footer;