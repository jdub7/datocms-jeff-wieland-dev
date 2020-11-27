import PostPreview from "../components/post-preview";
import { Heading, SimpleGrid } from "@chakra-ui/react";
export default function MoreStories({ heading, posts }) {
  return (
    <>
      <Heading mb={10}>{heading}</Heading>
      <SimpleGrid minChildWidth="300px" spacing="20px">
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
