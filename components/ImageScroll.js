import { Box } from "@chakra-ui/react";
import Image from "next/image";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ImageScroll = ({ images }) => {
  return (
    <Carousel showArrows={true}>
      {images.map((image) => (
        <Box key={image.id} height={400} minWidth="800" m={"1"}>
          <Image
            objectFit="cover"
            blurDataURL={image.url}
            src={image.url}
            height={400}
            width={700}
            layout="fill"
            alt="Property photos"
          />
        </Box>
      ))}
    </Carousel>
  );
};

export default ImageScroll;
