import Date from "../components/date";
import CoverImage from "./cover-image";
import Link from "next/link";
import {
  Box,
  Heading,
  Flex,
  Badge,
  Text,
  AvatarGroup,
  Avatar,
} from "@chakra-ui/react";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <Box overflow="hidden" borderWidth="1px" borderRadius="4px">
      <CoverImage
        slug={slug}
        title={title}
        responsiveImage={coverImage.responsiveImage}
      />
      <Text mt={2} p={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </Text>
      <Flex p={2} align="center">
        <Date dateString={date} />{" "}
        <Badge ml={2} colorScheme="pink">
          Plus
        </Badge>
      </Flex>

      <Text mt={2} p={2} fontSize="md" lineHeight="short">
        {excerpt}
      </Text>
      <Flex p={2} mr={5} mb={5} align="center" textAlign="right" float="right">
        <Avatar src={author.picture.url} name={author.name} />
        <Text ml={2} fontWeight="bold">{author.name}</Text>
      </Flex>
    </Box>
  );
}
