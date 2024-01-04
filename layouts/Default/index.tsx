"use client";

import Header from "@app/ui/Header";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      style={{
        minHeight: `calc(100vh - 101px)`, // Use template literals if needed
      }}
    >
      {/* <Header /> */}
      {children}
    </main>
  );
};

export default DefaultLayout;
