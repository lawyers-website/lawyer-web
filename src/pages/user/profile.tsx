import { Footer } from "@/components";
import UserProfile from "@/components/User/profile";
import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";

export default function Profile() {
  return (
    <>
      <UserProfile />
      <Footer />
    </>
  );
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const session = await getSession(ctx);
  const isUser = !!session?.user;

  if (!isUser) {
    return {
      redirect: {
        destination: "/user/user-in",
        permanent: false,
      },
    };
  }

  return { props: {} };
};
