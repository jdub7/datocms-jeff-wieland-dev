import PostPreview from "../components/post-preview";
import { Heading, SimpleGrid } from "@chakra-ui/react";
export default function MoreStories({ heading, posts }) {
  return (
    <>
      <Heading mt={10} mb={10}>{heading}</Heading>
      <SimpleGrid minChildWidth={{ base: "320px", md: "540px"}} spacing="20px">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            categories={post.category}
          />
        ))}
      </SimpleGrid>
    </>
  );
}
