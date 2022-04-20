import { Box, Flex, Heading, Icon, Image, SimpleGrid, Stack, Text, Tooltip } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { FiInfo } from 'react-icons/fi';
import { GetStaticPaths, GetStaticProps } from "next";
import api from "../../services/api";

interface CountriesData {
  id: number;
  name: string;
  flag: string;
  capital: string;
  image: string;
}

interface ContinentData {
  name: string;
  text: string;
  numberOfCountries: number;
  numberOfLanguages: number;
  numberOfCity: number;
  bannerImage: string;
  countries: CountriesData[];
}

interface ContinentProps {
  continent: ContinentData;
}

export default function Continent({continent}: ContinentProps) {

  return (
    <>
      <Header hasBack />
      <Box
        h={{base: 150, md: 500}} 
        w="100%" 
        backgroundImage={`url(${continent.bannerImage})`} 
        backgroundRepeat="no-repeat" 
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Flex 
          w="100%" 
          maxWidth={1160}
          h="100%" 
          mx="auto"
          align={{base: 'center', xl: 'flex-end'}}
          justify={{base: 'center', xl: 'flex-start'}}
          paddingBottom={{base: '0', xl: '14'}}
          paddingLeft={{base: '0', xl: '4'}}
        >
          <Heading 
            fontSize="5xl" 
            fontWeight="semibold" 
            color="gray.50"
          >
            {continent.name}
          </Heading>
        </Flex>
      </Box>
      <Flex w="100%" maxWidth={1160} mx="auto" mt={{base: '6', xl:'20'}} align="center" justify="space-between" wrap="wrap" px={{base: '4', xl: '0'}}>
        <Text fontSize={{base: 'sm', xl: '2xl'}} w="100%" maxWidth={{base: 'unset', lg: 600}} textAlign="justify">
          {continent.text}
        </Text>
        <Stack direction="row" spacing={['3', '8','10']} align="center" justify="space-between" mt={{base: '4', xl: '0'}}>
          <Box textAlign={{base: 'left', xl: 'center'}}>
            <Heading fontSize={{base: '2xl', xl: '5xl'}} fontWeight="semibold" color="orange.300">
              {continent.numberOfCountries}
            </Heading>
            <Text fontSize={{base: 'lg', xl: '2xl'}} fontWeight="semibold" color="gray.900">
              países
            </Text>
          </Box>
          <Box textAlign={{base: 'left', xl: 'center'}}>
            <Heading fontSize={{base: '2xl', xl: '5xl'}} fontWeight="semibold" color="orange.300">
              {continent.numberOfLanguages}
            </Heading>
            <Text fontSize={{base: 'lg', xl: '2xl'}} fontWeight="semibold" color="gray.900">
              línguas
            </Text>
          </Box>
          <Box textAlign={{base: 'left', xl: 'center'}}>
          <Heading fontSize={{base: '2xl', xl: '5xl'}} fontWeight="semibold" color="orange.300">
              {continent.numberOfCity}
            </Heading>
            <Flex align="center" justify="center">
              <Text fontSize={{base: 'lg', xl: '2xl'}} fontWeight="semibold" color="gray.900">
                cidades +100
              </Text>
              <Tooltip 
                label="+ 100 ótimas opções"
                bg="gray.900"
                borderRadius="4"
                placement="bottom-start"
                fontSize="md"
              >
                <span>
                  <Icon as={FiInfo} h={['3', '4']} w={['2', '4']} ml="1" color="rgba(153,153,153,0.5)" />
                </span>
              </Tooltip>
            </Flex>
          </Box>
        </Stack>
      </Flex>
      <Box w="100%" maxWidth={1160} mx="auto" mt={{base: '8', xl: '20'}} mb="9" px={{base: '4', xl: '0'}}>
        <Heading fontSize={{base: '2xl', xl: '4xl'}} fontWeight="medium" color="gray.900" mb={{base: '5', xl: '10'}}>
          Cidades + 100
        </Heading>
        <SimpleGrid
          justifyItems="center"
          spacing="10"
          minChildWidth="260px"
        >
          {continent.countries && continent.countries.map(country => (
            <Box 
              w="fit-content" 
              bg="white" 
              borderRadius="4" 
              borderWidth="1px" 
              borderColor="rgba(255,186,8,0.5)"
            >
              <Image 
                w="256px" 
                h="173px"
                objectFit="cover"
                objectPosition="center"
                src={country.image} 
                borderTopRadius="4" 
              />
              <Flex align="center" justify="space-between" mt="5" mb="6" mx="6">
                <Stack spacing="3">
                  <Text 
                    fontSize="xl" 
                    fontFamily="Barlow" 
                    fontWeight="semibold" 
                    color="gray.900" 
                  >
                    {country.capital}
                  </Text>
                  <Text 
                    fontSize="md" 
                    fontFamily="Barlow" 
                    fontWeight="medium" 
                    color="gray.800" 
                  >
                    {country.name}
                  </Text>
                </Stack>
                <Image 
                  h="30px" 
                  w="30px" 
                  src={country.flag} 
                  borderRadius="50%" 
                />
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;

  const response = await api.get(`/continents/${params.slug}`);

  const continent = response.data;

  return {
    props: {
      continent,
    },
    revalidate: 1,
  }
}