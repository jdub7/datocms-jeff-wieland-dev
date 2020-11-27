import markdownStyles from "./markdown-styles.module.css";
import { Box } from "@chakra-ui/react";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

export default function PostBody({ content }) {
  return (
    <Box
      size="xl"
      dangerouslySetInnerHTML={{ __html: content }}
    ></Box>
  );
}
