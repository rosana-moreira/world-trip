import { Flex, Heading, Image, FlexProps as ChakraFlexProps, Box } from "@chakra-ui/react";

interface CardProps extends ChakraFlexProps {
  name: string;
  image: string;
}

export function Card({name, image, ...rest}: CardProps) {
  return (
    <Flex
      w="fit-content"
      direction={{base: 'row', md:'column'}}
      align="center"
      justify="space-between"
      px="4"
      {...rest}
    >
      <Image
        display={{base: 'none', md:'block'}}
        src={image}
        alt={name}
        width="85"
        height="85" 
      />
      <Box
        display={{base: 'block', md:'none'}}
        h="8px"
        w="8px"
        bg="orange.300"
        borderRadius="50%"
        mr="2"
      />
      <Heading
        fontWeight={{base: 'medium', xl:'semibold'}}
        fontSize={{base: 'lg', xl:'2xl'}}
      >
        {name}
      </Heading>
    </Flex>
  );
}