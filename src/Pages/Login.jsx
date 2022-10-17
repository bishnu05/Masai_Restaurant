import React from 'react';
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast,
} from '@chakra-ui/react';
import { loginApi } from '../Store/Auth/action';


const Login = () => {
    const toast = useToast()
    let nav = useNavigate();
    const isAuth = useSelector((state) => state.auth.isAuth);
    console.log(isAuth)
    if (isAuth) {
        nav('/restaurant');
        toast({
            title: 'Already logged in',
            description: "Already logged in",
            status: 'success',
            duration: 5000,
            isClosable: true,
          })
    }
    const dispatch = useDispatch();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            const data = {
                "email": email,
                "password": password
            }
            dispatch(loginApi(data)).then(()=>{
                toast({
                    title: 'Login success',
                    description: "Logged in successfully",
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                  })
                nav('/restaurant')});
        }
    }

    return (
        <>
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                        <Text fontSize={'lg'} color={'gray.600'}>
                            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
                        </Text>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                            <form action="" onSubmit={(e) => handleSubmit(e)}>
                                <FormControl id="email">
                                    <FormLabel>Email address</FormLabel>
                                    <Input type="email" onChange={(e) => setemail(e.target.value)} required />
                                </FormControl>
                                <FormControl id="password">
                                    <FormLabel>Password</FormLabel>
                                    <Input type="password" onChange={(e) => setpassword(e.target.value)} required />
                                </FormControl>
                                <Stack spacing={10}>
                                    <Stack
                                        direction={{ base: 'column', sm: 'row' }}
                                        align={'start'}
                                        justify={'space-between'}>
                                        <Checkbox>Remember me</Checkbox>
                                        <Link color={'blue.400'}>Forgot password?</Link>
                                    </Stack>
                                    <Button
                                        type='submit'
                                        bg={'blue.400'}
                                        color={'white'}
                                        _hover={{
                                            bg: 'blue.500',
                                        }}>
                                        Sign in
                                    </Button>
                                </Stack>
                            </form>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </>
    )
}

export default Login