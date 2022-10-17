import React from 'react';
import HomeNav from '../Components/HomeNav';
import {Box} from '@chakra-ui/react'

const Home = () => {
  return (
    <div>
        <HomeNav/>
        <Box h='80vh' display="flex" justifyContent="center" alignItems='center' color={"green"} fontSize="40px" fontWeight="600">
            Welcome to Masai Restaurant
        </Box>
    </div>
  )
}

export default Home