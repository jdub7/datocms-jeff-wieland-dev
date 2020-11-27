import NextLink from "next/link";
import React from "react";
import {
  chakra,
  Link,
  HStack,
  Flex,
  IconButton,
  useDisclosure,
  useColorMode,
  useUpdateEffect,
  useColorModeValue,
} from "@chakra-ui/react";
import { useViewportScroll } from "framer-motion";

import { AiOutlineMenu } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import Logo from "../components/logo";

export default function Header(header) {
  const mobileNav = useDisclosure();

  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  const mobileNavBtnRef = React.useRef();

  const bg = useColorModeValue("white", "gray.800");
  const ref = React.useRef();
  const [y, setY] = React.useState(0);
  const { height = 0 } = ref.current?.getBoundingClientRect() ?? {};

  const { scrollY } = useViewportScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus();
  }, [mobileNav.isOpen]);

  return (
    <>
      <chakra.header
        ref={ref}
        shadow={y > height ? "sm" : undefined}
        transition="box-shadow 0.2s"
        pos="fixed"
        top="0"
        zIndex="1"
        bg={bg}
        left="0"
        right="0"
        width="full"
      >
        <chakra.div height="6rem" mx="auto" maxW="1400px">
          <Flex w="100%" h="100%" px="6" align="center" justify="space-between">
            <Flex align="center">
              <NextLink href="/" passHref>
                <chakra.a
                  display="block"
                  aria-label="Jeff Wieland, Back to homepage"
                >
                  <Logo />
                </chakra.a>
              </NextLink>
              <HStack
                as="nav"
                spacing="4"
                ml="24px"
                display={{ base: "none", md: "flex" }}
              >
                {header.link}
                {header.menuItems &&
                  header.menuItems.map((headerItem) => (
                    <Link href={headerItem.Link}>{headerItem.Label}</Link>
                  ))}
              </HStack>
            </Flex>

            <Flex maxW="720px" align="center" color="gray.400">
              <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Switch to ${text} mode`}
                variant="ghost"
                color="current"
                ml="3"
                onClick={toggleMode}
                icon={<SwitchIcon />}
              />
              <IconButton
                ref={mobileNavBtnRef}
                display={{ base: "flex", md: "none" }}
                aria-label="Open Menu"
                onClick={mobileNav.onOpen}
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
              />
            </Flex>
          </Flex>
        </chakra.div>
      </chakra.header>
    </>
  );
}
