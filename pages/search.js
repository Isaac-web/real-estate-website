import { useRouter } from "next/router";
import Image from "next/image";
import { Box, Container, Flex, Text } from "@chakra-ui/react";

import Property from "../components/Property";
import fetchSearchApiData from "../services/searchApi";
import SearchFilter from "../components/SearchFilter";
import NotFoundImage from "../assets/images/noresult.svg";

const Search = ({ searchResults }) => {
  const router = useRouter();

  const handleSearch = (params) => {
    const { key, value } = params;
    const purpose = router.query.purpose || "for-rent";
    const rentFrequency = router.query.rentFrequency || "yearly";
    const minPrice = router.query.minPrice || "0";
    const maxPrice = router.query.maxPrice || "1000000";
    const roomsMin = router.query.roomsMin || "0";
    const bathsMin = router.query.bathsMin || "0";
    const sort = router.query.sort || "price-desc";
    const areaMax = router.query.areaMax || "35000";
    const locationExternalIDs = router.query.locationExternalIDs || "5002";
    const categoryExternalID = router.query.categoryExternalID || "4";
    const queryObject = {
      purpose,
      rentFrequency,
      minPrice,
      maxPrice,
      roomsMin,
      bathsMin,
      sort,
      areaMax,
      locationExternalIDs,
      categoryExternalID,
    };

    queryObject[key] = value;
    console.log(queryObject);

    let query = "";
    for (let item in queryObject) {
      if (item) query += `${item}=${queryObject[item]}&`;
    }
    router.push({ pathname: router.pathname, query });
  };

  if (!searchResults.length)
    return (
      <Box>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems={"center"}
        >
          <Box>
            <Flex alignItems={"center"} justifyContent="center">
              <Image
                width={250}
                height={250}
                src="../assets/images/noresult.svg"
              />
            </Flex>
          </Box>
          <Box>
            <Text fontSize={"lg"} fontWeight={"bold"}>
              No Results Found
            </Text>
          </Box>
        </Flex>
      </Box>
    );

  return (
    <>
      <SearchFilter onSearch={handleSearch} />
      <Container maxWidth="6xl">
        <Box>
          <Box>
            {router.query.purpose && (
              <Text fontSize="lg" fontWeight="bold">
                Search results for: router.query.purpose
              </Text>
            )}
          </Box>
          <Flex flexWrap="wrap" justifyContent="center">
            {searchResults.map((p) => (
              <Property key={p.externalID} property={p} />
            ))}
          </Flex>
        </Box>
      </Container>
    </>
  );
};

export async function getServerSideProps({ query }) {
  const searchResults = await fetchSearchApiData(query);

  return {
    props: {
      searchResults: searchResults?.hits || [],
    },
  };
}

export default Search;
