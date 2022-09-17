import ReviewPage from "@/components/User/reviewpage";
import { getSession } from "next-auth/react";

export default function Review({ id, isReviewed }: any) {
  return <ReviewPage id={id} isReviewed={isReviewed} />;
}

export async function getServerSideProps(ctx: any) {
  const { id } = ctx.params;
  const session = await getSession(ctx);
  const isUser = !!session?.user;
  if (!isUser) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  return { props: { id: id } };
}
