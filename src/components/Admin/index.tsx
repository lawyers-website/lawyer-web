import { useState } from "react";
import Navbar from "./navbar";
import Dashboard from "./dashboard";
import Tables from "./table";
import type { User } from "@prisma/client";

export default function User1({
  users,
  lawyers,
  admins,
}: {
  users: User[];
  lawyers: User[];
  admins: User[];
}) {
  const [categories, setCategories] = useState("Overview");
  const labels = ["Id", "Username", "Email", "Role"];

  return (
    <>
      <Navbar categories={categories} setCategories={setCategories} />
      {categories === "Overview" && <Dashboard />}
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
