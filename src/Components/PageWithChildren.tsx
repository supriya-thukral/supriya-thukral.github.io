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
    <section className={"page " + className} id={id} aria-label={id}>
      <div className="anchor-offset" />
      {children}
    </section>
  );
};

export default PageWithChildren;
