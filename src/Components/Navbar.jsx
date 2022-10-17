import React from 'react';
import { Box, Button, Flex } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const nav=useNavigate();
    return (
        <>
            <Flex border="2px solid teal" borderRadius="8px" justifyContent="space-between" bg="white" padding='10px' width='100%' position="sticky" top="0" zIndex="100">
                <Button colorScheme='teal' variant='solid' onClick={()=>nav('/restaurant')} >Restaurant</Button>
                <Button colorScheme='teal' variant='solid' onClick={()=>nav('/cart')} >Cart</Button>
            </Flex>
        </>
    )
}

export default Navbar