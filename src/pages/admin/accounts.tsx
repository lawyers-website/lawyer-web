import { useState } from "react";
import Navbar from "@/components/Admin/navbar";
import Tables from "@/components/Admin/table";
import type { User } from "@prisma/client";
import { prisma } from "src/server/db/client";

export default function User1({
  users,
  lawyers,
  admins,
}: {
  users: User[];
  lawyers: User[];
  admins: User[];
}) {
  const [categories, setCategories] = useState("Users");
  const labels = ["Id", "Username", "Email", "Role"];

  return (
    <>
      <Navbar categories={categories} setCategories={setCategories} />
      {categories === "Users" && (
        <Tables labels={labels} Users={users} heading="Users" />
      )}
      {categories === "Lawyers" && (
        <Tables labels={labels} Users={lawyers} heading="Lawyers" />
      )}
      {categories === "Admins" && (
        <Tables labels={labels} Users={admins} heading="Admins" />
      )}
    </>
  );
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
