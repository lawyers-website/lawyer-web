import LawyerDetail from "@/components/Lawyer/detailspage";
import { LawyerDetails, Reviews } from "@prisma/client";
import { getSession } from "next-auth/react";
import { prisma } from "src/server/db/client";

export async function getServerSideProps(ctx: any) {
  const { id } = ctx.params;
  const session = await getSession(ctx);
  const lawyer = await prisma.lawyerDetails.findUnique({
    where: {
      lawyerId: id,
    },
  });

  const userId = session?.user?.id;
  const Reviews = await prisma?.reviews.findMany({
    where: {
      userId: userId,
      lawyerId: id,
    },
  });

  const reviews = await prisma.reviews.findMany({
    where: {
      lawyerId: id,
    },
  });

  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  if (Reviews && Reviews?.length > 0) {
    return {
      props: {
        lawyer: lawyer,
        isReviewed: true,
        reviews: JSON.parse(JSON.stringify(reviews)),
        username: user?.name,
      },
    };
  }

  return {
    props: {
      lawyer: JSON.parse(JSON.stringify(lawyer)),
      isReviewed: false,
      reviews: JSON.parse(JSON.stringify(reviews)),
      username: user?.name,
    },
  };
}

export default function Lawyer({
  lawyer,
  isReviewed,
  reviews,
  username,
}: {
  lawyer: LawyerDetails | null;
  isReviewed: boolean;
  reviews: Reviews[];
  username: string;
}) {
  return (
    <LawyerDetail
      lawyer={lawyer}
      isReviewed={isReviewed}
      reviews={reviews}
      username={username}
    />
  );
}
