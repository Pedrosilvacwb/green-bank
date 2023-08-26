import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="xl:max-w-[1240px] max-w-[80%] w-full my-0 mx-auto">
      {children}
    </div>
  );
};

export default Container;
