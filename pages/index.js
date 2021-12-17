import Image from "next/image";
import Link from "next/link";
import { Container, Box, Button, Flex, Text } from "@chakra-ui/react";
import fetchApiData from "../services/api";
import Property from "../components/Property";
import Router from "next/router";

const Banner = ({
  buttonLink,
  buttonText,
  topText,
  title1,
  title2,
  bodyText,
  imageUri,
}) => (
  <Box paddingTop="5" paddingBottom="5">
    <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
      <Box m="5">
        <Image
          src={imageUri || "/"}
          alt="Image Here"
          width={500}
          height={300}
        />
      </Box>
      <Box p="5">
        <Flex flexDirection="column">
          {topText && (
            <Text textTransform={"uppercase"} fontSize="sm">
              {topText}
            </Text>
          )}
          {title1 && (
            <Text fontWeight="black" fontSize="2xl">
              {title1}
            </Text>
          )}
          {title2 && (
            <Text fontWeight="black" fontSize="2xl">
              {title2}
            </Text>
          )}
          {bodyText && <Text fontSize="sm">{bodyText}</Text>}
        </Flex>
        <Link href={buttonLink} passHref>
          <Button marginTop="2">{buttonText || "Button"}</Button>
        </Link>
      </Box>
    </Flex>
  </Box>
);

export default function Home({ propertiesForRent, propertiesForSale }) {
  return (
    <Container maxWidth="container.xl">
      <Banner
        topText="Rent A Home"
        title1="Rental Homes For"
        title2="Every One"
        bodyText="Explore Apartments, Villas, Homes and more..."
        buttonText="Explore Renting"
        buttonLink="/search?purpose=for-rent"
        imageUri={
          "https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
        }
      />
      <Flex flexWrap={"wrap"} justify={"center"}>
        {propertiesForRent.map((p) => (
          <Property key={p.externalID} property={p} />
        ))}
      </Flex>

      <Banner
        topText="Buy A Home"
        title1="Find, Buy And Own"
        title2="Your Dream Home"
        bodyText="Explore Apartments, Villas, Homes and more..."
        buttonText="Explore Buying"
        buttonLink="/search?purpose=for-sale"
        imageUri="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />

      <Flex flexWrap={"wrap"} justify={"center"}>
        {propertiesForSale.map((p) => (
          <Property key={p.externalID} property={p} />
        ))}
      </Flex>
    </Container>
  );
}

export async function getStaticProps() {
  const url = "/list?locationExternalIDs=5002&hitsPerPage=6&purpose=";
  const propertiesForRent = await fetchApiData(`${url}for-rent`);
  const propertiesForSale = await fetchApiData(`${url}for-sale`);

  return {
    props: {
      data: "Hello World",
      propertiesForSale: propertiesForSale?.hits,
      propertiesForRent: propertiesForRent?.hits,
    },
  };
}
