import User from "../../../components/User";
import { prisma } from "src/server/db/client";

export default function userIn() {
  return <User />;
}

export async function getServerSideProps(ctx: any) {
  const lawyers = await prisma?.lawyerDetails.findMany();
  const usernames = lawyers?.map((lawyer) => lawyer.fullName);
  return {
    props: { usernames },
  };
}
