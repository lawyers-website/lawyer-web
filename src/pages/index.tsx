import type { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import { Opening, Header, Jumbotron, Footer } from "../components";

export default function Index() {
  return (
    <>
      <Opening />
      <Header />
      <Jumbotron />
      <Footer />
    </>
  );
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const session = await getSession(ctx);
  const isUser = !!session?.user;

  if (isUser) {
    return {
      redirect: {
        destination: "/user/user-in",
        permanent: false,
      },
    };
  }

  return { props: {} };
};
