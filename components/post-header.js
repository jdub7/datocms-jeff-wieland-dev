import Date from "../components/date";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";
import { Avatar, Flex, Text, Box, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";

export default function PostHeader({ title, coverImage, date, author }) {
  const bg = useColorModeValue("black", "gray.100");
  const color = useColorModeValue("white", "black");

  return (
    <>
      <PostTitle>{title}</PostTitle>
      <Box borderRadius="6px" overflow="hidden">
        <Image
          layout="intrinsic"
          height={700}
          width={1400}
          src={coverImage.url}
          alt={coverImage.alt}
        ></Image>
        <Flex bg={bg} color={color} p={5} mb={10} align="center">
          <Text>
            <Date dateString={date} /> by
          </Text>
          <Avatar ml="5px" name={author.name} src={author.picture.url} />
          <Text ml={2} fontWeight="bold">
            {author.name}
          </Text>
        </Flex>
      </Box>
    </>
  );
}
