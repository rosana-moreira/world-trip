import { Flex, Heading, Text, LinkBox } from "@chakra-ui/react";
import Link from "next/link";

interface CarouselItemProps {
  slug: number;
  name: string;
  description: string;
  image: string;
}

export function CarouselItem({slug, name, description, image}: CarouselItemProps) {
  return (
    <Link href={`/continent/${slug}`} passHref>
      <LinkBox as="a">
        <Flex 
          direction="column" 
          align="center" 
          justify="center" 
          h={{base: 250, xl: 450}}
          w="100%" 
          bg={`url(${image})`} 
          backgroundRepeat="no-repeat" 
          backgroundSize="cover" 
          backgroundPosition="center" 
          boxShadow="inset 0 0 0 450px rgba(28, 20, 1, 0.35)"
        >
          <Heading fontSize={{base: '2xl', md: '4xl', lg: '5xl'}} color="gray.50">
            {name}
          </Heading>
          <Text fontSize={{base: 'sm', md: 'xl', lg: '2xl'}} fontWeight="bold" color="gray.100" mt={{base: '3', xl: '4'}}>
            {description}
          </Text>
        </Flex>
      </LinkBox>
    </Link>
  );
}