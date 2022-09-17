import User1 from "../../components/Admin";
import { prisma } from "src/server/db/client";
import type { User } from "@prisma/client";

export default function Admin({
  users,
  lawyers,
  admins,
}: {
  users: User[];
  lawyers: User[];
  admins: User[];
}) {
  return <User1 users={users} lawyers={lawyers} admins={admins} />;
}

export const getServerSideProps = async () => {
  const users = await prisma.user.findMany({
    where: {
      role: "USER",
    },
  });

  const lawyers = await prisma.user.findMany({
    where: {
      role: "LAWYER",
    },
  });

  const admins = await prisma.user.findMany({
    where: {
      role: "ADMIN",
    },
  });

  return {
    props: {
      users: JSON.parse(JSON.stringify(users)),
      lawyers: JSON.parse(JSON.stringify(lawyers)),
      admins: JSON.parse(JSON.stringify(admins)),
    },
  };
};
