import React, { useState } from 'react'
import Navbar from '../Components/Navbar';
import {
    Button,
    Flex,
    Text,
    Box,
    useDisclosure,
    PinInput,
    PinInputField,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    useToast,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    HStack
} from '@chakra-ui/react'




const Cart = () => {
    const [otp, setotp] = useState("");
    const toast = useToast()
    let data = localStorage.getItem('cart');
    data = JSON.parse(data);
    data=data.map((el)=>{
       return {...el,quantity:1}
    })

    let totalPrice = data.reduce((accumulator, item) => {
        return accumulator + Number(item.price_starts_from);
    }, 0);

    let GST = (totalPrice * 18) / 100;

    let addedGST = totalPrice + GST;


    const { isOpen, onOpen, onClose } = useDisclosure();
    
    const handleOtp = () => {
        if (otp == "1234") {
            onClose();
            toast({
                title: 'Order sucessfully',
                description: "Order Placed",
                status: 'success',
                duration: 5000,
                isClosable: true,
              })

        }
        else
        {
            toast({
                title: 'Check OTP',
                description: "Wrong OTP",
                status: 'error',
                duration: 5000,
                isClosable: true,
              })
        }
    }
    return (
        <>
            <Navbar />
            <Text fontSize="25px" margin="auto">Cart</Text>
            <Flex justifyContent="center" marginTop="">
                <TableContainer>
                    <Table size='lg'>
                        <Thead>
                            <Tr>
                                <Th>No</Th>
                                <Th>Name</Th>
                                <Th>Type</Th>
                                <Th>Price</Th>
                                <Th>Votes</Th>
                                <Th>Rating</Th>
                                <Th>Quantity</Th>
                                <Th>Add</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                data.map((el) => {
                                    return <Tr key={el.id}>
                                        <Td>{el.id}</Td>
                                        <Td>{el.name}</Td>
                                        <Td>{el.type}</Td>
                                        <Td>{el.price_starts_from}</Td>
                                        <Td>{el.number_of_votes}</Td>
                                        <Td>{el.rating}</Td>
                                        <Td>{el.quantity}</Td>
                                        <Td><Button>-</Button><Button>+</Button></Td>
                                    </Tr>
                                })
                            }
                        </Tbody>
                    </Table>
                </TableContainer>
            </Flex>
            <Box border="2px solid" width="40%" padding="20px" fontSize="20px" fontWeight="600" margin="auto" marginTop="20px" marginBottom="20px" >
                <Text>Price : ${totalPrice}</Text>
                <Text>Total (18% GST) : ${addedGST}</Text>
            </Box>
            <Box>
                <Button colorScheme='yellow' variant='solid' onClick={onOpen}>Place Order</Button>
            </Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign="center">Enter OTP</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody margin="auto" display="flex" padding="30px" gap="20px" flexDirection="column" justifyContent="center">
                        <HStack>
                            <PinInput type='alphanumeric' onChange={(e) => setotp(e)}>
                                <PinInputField required />
                                <PinInputField required />
                                <PinInputField required />
                                <PinInputField required />
                            </PinInput>
                        </HStack>
                        <Button colorScheme='yellow' variant='solid' onClick={handleOtp}>SUBMIT</Button>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

//<HStack>
{/* <PinInput>
<PinInputField />
<PinInputField />
<PinInputField />
<PinInputField />
</PinInput>
</HStack> */}

export default Cart