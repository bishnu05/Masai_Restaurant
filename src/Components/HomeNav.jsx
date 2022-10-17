import { Button,Flex } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const HomeNav = () => {
    const nav=useNavigate();
    const handleLogin=()=>
    {
        nav('/login')
    }

    const handleRestaurant=()=>
    {
        nav('/restaurant')
    }
    return (
        <>
            <Flex border="2px solid teal" borderRadius="8px" justifyContent="space-between" padding='10px' width='100%' position="sticky" top="0">
                <Button colorScheme='teal' variant='solid' onClick={handleLogin}>Login</Button>
                <Button colorScheme='teal' variant='solid' onClick={handleRestaurant}>Restaurant</Button>
            </Flex>
        </>
    )
}

export default HomeNav