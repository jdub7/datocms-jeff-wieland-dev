import { chakra, useColorModeValue } from "@chakra-ui/react";

export default function Logo(props) {
  const fill = useColorModeValue("#000", "#fff");

  return (
    <chakra.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 712 99"
      height="8"
      width="auto"
      {...props}
    >
      <path
        d="M48.6 8.019H29.8v54.4c0 8.3-4.1 11.6-9.5 11.6-4.8 0-10.7-5.6-10.7-5.6l-6 15.7a28.563 28.563 0 0019.3 7.9c16.5 0 25.7-8.6 25.7-24.8v-59.2zm58.2 0H59.6v82.505h47.2v-16.5H78.4v-16.6h27.2v-16.5H78.4V24.52h28.4V8.019zm58.5 0h-47.7v82.505h18.8v-33.1h26.7v-16.5h-26.7V24.52h28.9V8.019zm56.7 0h-47.7v82.505h18.8v-33.1h26.7v-16.5h-26.7V24.52H222V8.019zm63.8 82.505h20.8l23.5-82.505h-20.8l-14.1 56.6h-.5l-15-56.6h-14.2l-15 56.6h-.5l-14.1-56.6H215l23.5 82.505h20.9l13.2-46.3zm67.6-82.505h-18.8v82.505h18.8V8.019zm59.2 0h-47.2v82.505h47.2v-16.5h-28.4v-16.6h27.2v-16.5h-27.2V24.52h28.4V8.019zm29.6 0h-18.8v82.505h47.2v-16.5h-28.4v-66zm81.1 0h-17.4l-33.3 82.505h20.2l6.1-16.5h31.4l6.1 16.5h20.2zm.6 49.5h-18.6l9.2-24h.2zm54.7-18.2h.2l32.8 51.2h18.8v-82.5h-18.8v51.2h-.2l-32.8-51.2h-18.8v82.505h18.8v-51.2zm63.8-31.3v82.505h23.9c22.7 0 41.6-17.2 41.6-41.3 0-24-19-41.2-41.6-41.2h-23.9zm18.8 65.7V24.82h2.9c14 0 23.5 10.7 23.5 24.5-.1 13.8-9.6 24.4-23.5 24.4h-2.9z"
        fill={fill}
      />
    </chakra.svg>
  );
}