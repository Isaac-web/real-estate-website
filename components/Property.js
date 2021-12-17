import Link from "next/link";
import Image from "next/image";
import { Box, Text, Flex } from "@chakra-ui/react";
import millify from "millify";
import { GoVerified } from "react-icons/go";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";

const Property = ({ property }) => {
  const {
    title,
    price,
    agency,
    coverPhoto,
    rentFrequency,
    isVerified,
    baths,
    rooms,
    area,
    externalID,
  } = property;

  return (
    <Link href={`/property/${externalID}`} passHref>
      <Box p="5" cursor={"pointer"}>
        <Flex direction={"column"}>
          <Box>
            <Image
              src={coverPhoto.url}
              width={280}
              height={180}
              alt="Property Image"
            />
          </Box>
          <Box>
            <Flex alignItems={"center"} justify={"space-between"}>
              <Box>
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
                <Image
                  src={agency.logo.url}
                  width={50}
                  height={50}
                  objectFit="contain"
                  alt="agency picture"
                />
              </Box>
            </Flex>

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

            <Text>
              {title.length < 30 ? title : `${title.substring(0, 30)}...`}
            </Text>
          </Box>
        </Flex>
      </Box>
    </Link>
  );
};

export default Property;
