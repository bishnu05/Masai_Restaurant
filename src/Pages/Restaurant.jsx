import { Box, Button, Grid, Flex, Image, Text, Select,useToast } from '@chakra-ui/react';
import React from 'react';
import { StarIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Components/Navbar';
import { filterApi, getApi, sortApi } from '../Store/Data/action';

const Restaurant = () => {
    const toast = useToast()
    const [page, setpage] = useState(1);
    const [fil, setfil] = useState("");

    const dispatch = useDispatch();

    let token = localStorage.getItem('token');

    const handleFilter = (e) => {
        let filter = e.target.value;
        dispatch(filterApi(filter))
    }

    const handleSortRating = (e) => {
        let sort = e.target.value;
        let type = "rating";

        dispatch(sortApi(sort, type, fil))
    }

    const handleSortPrice = (e) => {
        let sort = e.target.value;
        let type = "price_starts_from"
        dispatch(sortApi(sort, type, fil))
    }

    useEffect(() => {
        dispatch(getApi(page));
    }, [page]);

    let data = useSelector((state) => state.data.data);

    const handleCart=(el)=>
    {
        let cartData=JSON.parse(localStorage.getItem("cart"))||[];
        cartData=[...cartData,el];
        cartData=JSON.stringify(cartData);
        localStorage.setItem("cart",cartData);
        toast({
            title: 'Added to cart',
            description: "Added to cart Sucessfully",
            status: 'success',
            duration: 4000,
            isClosable: true,
          })
    }
    return (
        <>
            <Navbar />
            <Flex margin="20px 0 20px 0" justifyContent="center" width="100%"  ><Text padding="5px" borderRadius="5px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" fontWeight="600" fontSize="13px">Token: {token}</Text></Flex>
            <Flex justifyContent="space-between">
                <Select placeholder='Filter type' onChange={(e) => { handleFilter(e), setfil(e.target.value) }} w="200px" bg="teal.400">
                    <option value='cafe'>Cafe</option>
                    <option value='ethnic'>Ethnic</option>
                    <option value='fast_food'>Fast food</option>
                    <option value='casual_dining'>Casual dining</option>
                    <option value='fine_dining'>Fine dining</option>
                </Select>
                <Select placeholder='Sort Rating' w="200px" bg="teal.400" onChange={(e) => handleSortRating(e)}>
                    <option value="asc">Low To High</option>
                    <option value="desc">High To Low</option>
                </Select>
                <Select placeholder='Sort Price' w="200px" bg="teal.400" onChange={(e) => handleSortPrice(e)}>
                    <option value="asc">Low To High</option>
                    <option value="desc">High To Low</option>
                </Select>
            </Flex>
            <Grid gridTemplateColumns='repeat(5,1fr)' marginTop="20px" gap="20px" justifyItems='center' alignContent="center" >
                {
                    data.map((el) => {
                        return <Flex key={el.id} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" width="225px" padding="20px" borderRadius="10px" gap="-10px" justifyContent="center" direction="column"  >
                            <Box>
                                <Image src={el.image} width="100%" height="180px" borderRadius="10px" />
                            </Box>
                            <Flex padding="8px" justifyContent="space-between">
                                <Box><Text fontSize="15px" fontWeight="600">{el.name}</Text></Box>
                                <Box borderRadius="5px" bg="yellow.500" padding="2px 10px" color="white" display="flex" alignItems="center" gap="3px"><StarIcon fontSize="10px" /><Text fontSize="13px" fontWeight="600">{el.rating}</Text></Box>
                            </Flex>
                            <Flex flex="start" direction="column" alignItems="start" paddingLeft="8px" marginTop="-10px">
                                <Text fontSize="13px" color="gray.400" fontWeight="400">{el.type}</Text>
                                <Text fontSize="15px" fontWeight="700">${el.price_starts_from}</Text>
                            </Flex>
                            <Button colorScheme='yellow' variant='solid' marginTop="10px" onClick={()=>handleCart(el)}>Add to Cart</Button>
                        </Flex>
                    })
                }
            </Grid>
            <div style={{width: "30%",display:"flex",justifyContent:"space-around", margin:"auto",marginTop:"20px"}}>
            <button style={{backgroundColor:"green",color : "white",padding : "2px 6px"}} onClick={() => setpage(1)}>1</button>
            <button style={{backgroundColor:"green",color : "white",padding : "2px 6px"}} onClick={() => setpage(2)}>2</button>
            <button style={{backgroundColor:"green",color : "white",padding : "2px 6px"}} onClick={() => setpage(3)}>3</button>
            <button style={{backgroundColor:"green",color : "white",padding : "2px 6px"}} onClick={() => setpage(4)}>4</button>
            <button style={{backgroundColor:"green",color : "white",padding : "2px 6px"}} onClick={() => setpage(5)}>5</button>
        </div>
        </>
    )
}

export default Restaurant