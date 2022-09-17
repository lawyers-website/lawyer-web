import SearchResult from "@/components/User/SearchResultPage";
import { LawyerDetails } from "@prisma/client";
import { prisma } from "src/server/db/client";

export default function SearchResultPage({
  lawyers,
}: {
  lawyers: LawyerDetails[];
}) {
  return <SearchResult lawyers={lawyers} />;
}

export async function getServerSideProps() {
  const lawyers = await prisma.lawyerDetails.findMany();
  return {
    props: { lawyers },
  };
}
