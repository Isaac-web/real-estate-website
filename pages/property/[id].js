import { useRouter } from "next/router";
import { Box, Flex, Container, Text } from "@chakra-ui/react";
import ImageScroll from "../../components/ImageScroll";
import fetchApiData from "../../services/api";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import { FaBath, FaBed } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";

const PropertyDetails = ({ propertyDetails }) => {
  const {
    isVerified,
    price,
    rentFrequency,
    photos,
    baths,
    rooms,
    area,
    title,
    description,
    type,
    purpose,
    amenities,
    completionStatus,
  } = propertyDetails;
  console.log(propertyDetails);

  return (
    <Container maxWidth={"6xl"}>
      {/* <Box marginBottom={"5"}> */}
      <ImageScroll images={photos} />
      {/* </Box> */}

      <Box marginBottom={"5"}>
        <Flex alignItems="center">
          <Box marginRight={"1"} color="green.400" fontSize={"sm"}>
            {isVerified && <GoVerified />}
          </Box>
          <Text fontWeight={"black"}>
            AED {millify(price)} {rentFrequency && `| ${rentFrequency}`}
          </Text>
        </Flex>
      </Box>

      <Box>
        <Flex flexWrap="wrap">
          <Box marginRight={"1.5"}>
            <Flex alignItems="center">
              {baths}
              <Box color="blue.400" marginLeft={"1"}>
                <FaBath color="blue.400" />
              </Box>
            </Flex>
          </Box>
          <Box marginRight={"1.5"} marginLeft={"1.5"}>
            <Flex alignItems="center">
              {rooms}
              <Box color="blue.400" marginLeft={"1"}>
                <FaBed color="blue.400" />
              </Box>
            </Flex>
          </Box>
          <Box marginRight={"1.5"} marginLeft={"1.5"}>
            <Flex alignItems="center">
              {`${millify(area)} sqft`}
              <Box color="blue.400" marginLeft={"1"}>
                <BsGridFill color="blue.400" />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>

      <Box marginTop={"5"} marginBottom={"5"}>
        <Text fontWeight={"semibold"} fontSize={"2xl"}>
          {title}
        </Text>
      </Box>

      <Box marginTop={"5"} marginBottom={"5"}>
        <Text>{description}</Text>
      </Box>

      <Box paddingBottom={"5"}>
        <Flex textTransform={"uppercase"}>
          <Text paddingRight={"5"}>Type</Text>
          <Text paddingLeft={"5"} fontWeight="bold">
            {type}
          </Text>
        </Flex>
      </Box>

      <Box paddingBottom={"5"}>
        <Flex textTransform={"uppercase"}>
          <Text paddingRight={"5"}>Purpose</Text>
          <Text paddingLeft={"5"} fontWeight="bold">
            {purpose}
          </Text>
        </Flex>
      </Box>

      <Box paddingBottom={"5"}>
        <Flex textTransform={"uppercase"}>
          <Text paddingRight={"5"}>Completion Status</Text>
          <Text paddingLeft={"5"} fontWeight="bold">
            {completionStatus}
          </Text>
        </Flex>
      </Box>

      <Box>
        <Box>
          <Text fontWeight={"bold"} fontSize="lg">
            Facilities:
          </Text>
        </Box>
        <Box>
          <Flex flexWrap="wrap">
            {amenities.map((item) => (
              <Text
                bg="blue.300"
                m="1"
                color="white"
                p="1.5"
                key={item.text}
                borderRadius={"5"}
              >
                {item.text}
              </Text>
            ))}
          </Flex>
        </Box>
      </Box>
    </Container>
  );
};

export async function getServerSideProps({ query }) {
  const propertyDetails = await fetchApiData(`/detail?externalID=${query.id}`);

  return {
    props: {
      propertyDetails,
    },
  };
}

export default PropertyDetails;
