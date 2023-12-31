"use client";

import { Logo } from "$components/Global";
import { StaticImageData } from "next/image";

interface LoginAndSingInWrapperProps {
  children: React.ReactNode;
  coverImg?: StaticImageData;
}
const randomImageFromUnsplash = "https://source.unsplash.com/random?airbus";

export const LoginAndSingInWrapper = ({ children, coverImg }: LoginAndSingInWrapperProps) => {
  return (
    <section className="grid min-h-screen md:grid-cols-2">
      <div
        className="hidden h-full w-full md:block"
        style={{
          backgroundImage: `url(${coverImg?.src || randomImageFromUnsplash}`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="my-auto flex h-full flex-col p-4 sm:p-8">
        <div className="mx-auto mb-10">
          <Logo className="z-10 w-32" />
        </div>

        {children}
      </div>
    </section>
  );
};
