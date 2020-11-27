import { Heading } from "@chakra-ui/react";
export default function PostTitle({ children }) {
  return (
    <Heading
      size="3xl"
      mb={{ base: 5, md: 10 }}
      mt={{ base: 5, md: 10 }}
    >
      {children}
    </Heading>
  );
}
