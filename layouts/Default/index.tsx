"use client";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      style={{
        minHeight: `calc(100vh - 101px)`, // Use template literals if needed
      }}
    >
      {children}
    </main>
  );
};

export default DefaultLayout;
