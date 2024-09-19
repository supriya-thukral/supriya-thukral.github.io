import React from "react";
import CardComponent from "./CardRow";

export interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}
interface PageProps {
  title: string;
  content: React.ReactNode;
  className?: string;
  image?: ImageProps;
  children?: React.ReactNode;
  href?: string;
}

const Page: React.FC<PageProps> = ({
  title,
  className,
  image,
  children,
  href,
}) => {
  return (
    <div className={"page " + className} id={href}>
      <CardComponent
        title={title}
        image={image}
        className="card"
        children={children}
      />
    </div>
  );
};

export default Page;
