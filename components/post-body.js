import markdownStyles from "./markdown-styles.module.css";
import { Box } from "@chakra-ui/react";
import Markdown from "react-markdown";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import { postRenderer } from "../utils/renderer";

export default function PostBody({ content }) {
  return (
    <Box fontSize="xl">
      <Markdown escapeHtml={false} renderers={postRenderer} source={content} />
    </Box>
  );
}
