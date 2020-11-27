import Date from "../components/date";
import CoverImage from "./cover-image";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Heading,
  Flex,
  Badge,
  Text,
  AvatarGroup,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

export default function PostPreview({
  title,
  categories,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  const bg = useColorModeValue("black", "gray.100");
  const color = useColorModeValue("white", "black");

  return (
    <Box overflow="hidden" borderWidth="1px" borderRadius="4px">
      <Image
        layout="responsive"
        height={290}
        width={580}
        src={coverImage.url}
        alt={coverImage.alt}
      ></Image>
      <Flex bg={bg} color={color} align="center" p={5} mb={5}>
        <Text>
          <Date dateString={date} /> by
        </Text>
        <Avatar ml="5px" name={author.name} src={author.picture.url} />
        <Text ml={2} fontWeight="bold">
          {author.name}
        </Text>
        {categories && categories.map((category) => {
          <Badge>category.name</Badge>
        })}
      </Flex>

      <Text
        mt={5}
        pl={5}
        pr={5}
        fontSize="2xl"
        fontWeight="semibold"
        lineHeight="short"
      >
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          {title}
        </Link>
      </Text>
      <Text mt={2} p={5} fontSize="md" lineHeight="short">
        {excerpt}
      </Text>
    </Box>
  );
}
