import { Footer } from "@/components";
import Navbar from "@/components/Lawyer/navbar";
import UserProfile from "@/components/User/profile";
import { getSession } from "next-auth/react";

export default function Profile() {
  return (
    <>
      <Navbar />
      <UserProfile />
      <Footer />
    </>
  );
}

export const getServerSideProps = async (ctx: any) => {
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
