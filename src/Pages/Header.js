import React from 'react'
import {Box, Text } from "@chakra-ui/react";


const Header = () => {
  return (
    <Box width={"100%"} display = "flex" padding={["0px" , "20px"]} 
     bgColor={"grey"} alignItems={"center"} justifyContent={"center"}>
        <Box  display = "flex" alignItems={"center"}  justifyContent={"space-between"} gap={"12px"}>
            <Text fontSize={["2xl", '4xl']}>Dynamic Form-Maker</Text>
        </Box>   
    </Box>
  )
}

export default Header;