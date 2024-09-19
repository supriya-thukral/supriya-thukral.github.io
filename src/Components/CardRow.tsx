import React, { ReactNode } from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { ImageProps } from "./Page";

interface CardProps {
  title?: string;
  className?: string;
  image?: ImageProps;
  children?: ReactNode;
  imageLocation?: "left" | "right";
}

/**
 * CardComponent
 * This component is used to display a card with an image and text
 * @param title - The title of the card
 * @param imageLocation - The location of the image (left or right)
 * @returns A card component
 */
const CardComponent: React.FC<CardProps> = ({
  title,
  className,
  image,
  children,
  imageLocation = "left",
}) => {
  const hasImage = !!image;

  return (
    <Card
      className={className}
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: imageLocation === "right" ? "row-reverse" : "row",
        },
        boxShadow: "none",
        borderRadius: 0,
        mb: 4,
      }}
    >
      {hasImage && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: { xs: "100%", sm: "30%" },
            overflow: "hidden",
            padding: 2,
          }}
        >
          <CardMedia
            component="img"
            image={image.src}
            alt={image.alt}
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              boxShadow: 3,
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: 6,
              },
            }}
          />
        </Box>
      )}
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "1%",
          width: { xs: "100%", sm: "70%" },
        }}
      >
        {title && (
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
        )}
        <Box>{children}</Box>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
