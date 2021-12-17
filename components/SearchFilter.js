import { useState } from "react";

import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { MdCancel } from "react-icons/md";
import { AiFillFunnelPlot } from "react-icons/ai";

import { filterData } from "../utils/filterData";
import { Select } from "@chakra-ui/react";

const SearchFilter = ({ onSearch }) => {
  const [showfilter, setShowFilter] = useState(false);
  const handleChange = ({ target: input }) => {
    onSearch({ key: input.name, value: input.value });
  };

  return (
    <Box p="10" bgColor="gray.200">
      <Flex
        flexDirection="column"
        alignItems="center"
        fontWeight={"bold"}
        fontSize={"lg"}
      >
        <Box>
          <Box>
            <Flex alignItems="center">
              <Text>Search Filter</Text>
              <IconButton m="2" onClick={() => setShowFilter((prev) => !prev)}>
                {showfilter ? (
                  <MdCancel paddingLeft="2" p="1" />
                ) : (
                  <AiFillFunnelPlot />
                )}
              </IconButton>
            </Flex>
          </Box>
        </Box>
        {showfilter && (
          <Box p="1">
            <Flex justifyContent="center" flexWrap="wrap">
              {filterData.map((item) => (
                <Box key={item.queryName}>
                  <Select
                    onChange={handleChange}
                    name={item.queryName}
                    placeholder={item.placeholder}
                  >
                    {item.items.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.name}
                      </option>
                    ))}
                  </Select>
                </Box>
              ))}
            </Flex>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default SearchFilter;
