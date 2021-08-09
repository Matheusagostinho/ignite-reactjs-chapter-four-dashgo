import { Text } from "@chakra-ui/react";

export function Logo(){
  return(
    <Text
        fontSize={["2xl", "3xl"]}
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        Dashgo
        <Text
          as="span"
          color="pink.400"
          fontSize="4xl"   
        >
          .
        </Text>
      </Text>

  )
}