import { getSession } from "next-auth/react";
import { Home, Opening, Header, Jumbotron, Footer } from "../components";

export default function Index() {
  return (
    <>
      <Home />
      <Opening />
      <Header />
      <Jumbotron />
      <Footer />
    </>
  );
}

export const getServerSideProps = async (ctx: any) => {
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
