import Link from "next/link";
import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  IconButton,
} from "@chakra-ui/react";

import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

const MenuListItemLink = ({ href, title, Icon }) => (
  <Link href={href} passHref>
    <MenuItem icon={Icon}>{title}</MenuItem>
  </Link>
);

const Header = () => {
  return (
    <>
      <Box p="4" backgroundColor={"white"}>
        <Flex alignItems="center" justifyContent={"space-between"}>
          <Text
            fontSize={"xl"}
            color="blue.400"
            fontWeight={"black"}
            cursor={"pointer"}
          >
            Homely
          </Text>
          <Menu>
            <MenuButton as={IconButton}>
              <Flex justifyContent="center" alignItems={"center"}>
                <FcMenu />
              </Flex>
            </MenuButton>

            <MenuList>
              <MenuListItemLink title="Home" Icon={<FcHome />} href="/" />
              <MenuListItemLink
                title="Search"
                Icon={<BsSearch />}
                href="/search"
              />
              <MenuListItemLink
                title="Rent A Home"
                Icon={<FiKey />}
                href="/search?purpose=for-rent"
              />
              <MenuListItemLink
                title="Buy A Home"
                Icon={<FcAbout />}
                href="/search?purpose=for-sale"
              />
            </MenuList>
          </Menu>
        </Flex>
      </Box>
      {/* <Box marginBottom={"14"} /> */}
    </>
  );
};

export default Header;
