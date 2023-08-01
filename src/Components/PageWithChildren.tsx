import React, { ReactNode } from "react";

interface PageWithChildrenProps {
  children: ReactNode;
  className?: string;
  id: string;
}

const PageWithChildren: React.FC<PageWithChildrenProps> = ({
  children,
  className,

  id,
}) => {
  return (
    <div className={"page " + className} id={id}>
      <div className="anchor-offset" />
      {children}
    </div>
  );
};

export default PageWithChildren;
