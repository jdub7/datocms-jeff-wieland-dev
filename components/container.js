import { Box } from "@chakra-ui/react"

export default function Container({ children, props }) {
  return (
    <Box
      w="full"
      pb="12"
      pt="3"
      mt="20"
      mx="auto"
      maxW="1400px"
      px={{ base: "12", md: "6" }}
      {...props}
    >
      {children}
    </Box>
  );
}
