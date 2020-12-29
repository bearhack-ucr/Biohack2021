import Head from "next/head";
import { useRouter } from "next/router";
import { Nav } from "./Nav";

export const siteTitle = "Biohack"

export default function Container({ children, main }) {
  const router = useRouter();

  return (
    <>
    <Nav/>
      {children}
    </>
  );
}
