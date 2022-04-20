import { Box, Button, Flex, Icon, Image } from "@chakra-ui/react";
import Link from 'next/link';
import { FiChevronLeft } from 'react-icons/fi';

interface HeaderProps {
  hasBack?: boolean;
}

export function Header({ hasBack = false }: HeaderProps) {

  return(
    <Box w="100%">
      <Flex 
        w="100%" 
        maxWidth={1160} 
        align="center" 
        justify="space-between" 
        py="7"
        px={{base: '4', xl: 0}}
        mx="auto"
      >
        { hasBack ? (
          <Link href="/">
            <Button rounded="50%" h="10" w="8" colorScheme="telegram" variant="ghost">
              <Icon as={FiChevronLeft} h="6" w="6" color="gray.900" />
            </Button>
          </Link>
        ) : (
          <Box />
        )}
        <Image src="/assets/logo.svg" alt="WorldTrip" />
        <Box />
      </Flex>
    </Box>
  );
}