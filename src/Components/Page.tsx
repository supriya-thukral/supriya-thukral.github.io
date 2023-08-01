import CardComponent from "./CardRow";
import React from "react";

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
  content,
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
