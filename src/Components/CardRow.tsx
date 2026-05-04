import React, { ReactNode } from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { ImageProps } from "../types/ui";

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
  const imageClassName = image?.className ?? "";

  return (
    <Card
      className={className}
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: imageLocation === "right" ? "row-reverse" : "row",
        },
        borderRadius: "20px",
        border: "1px solid",
        borderColor: "divider",
        mb: 4,
        backgroundColor: "background.paper",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.04)",
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
            className={imageClassName}
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: imageClassName === "round-image" ? "50%" : "14px",
              aspectRatio: imageClassName === "round-image" ? "1 / 1" : undefined,
              border: "1px solid",
              borderColor: "divider",
            }}
          />
        </Box>
      )}
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: { xs: "20px", sm: "24px" },
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
