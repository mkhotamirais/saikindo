import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-full px-3 max-w-6xl mx-auto">{children}</div>;
};

export const Title = ({ title, description }: { title: string; description?: string }) => {
  return (
    <div className="flex flex-col justify-center items-center pb-6">
      <h1 className="text-3xl font-bold font-poppins">{title}</h1>
      <p className="text-muted-foreground font-roboto">{description}</p>
    </div>
  );
};
