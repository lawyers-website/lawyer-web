import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import Details from '../../../components/User/details';

export default function lawyerDetails() {
  return <Details />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  const isUser = session?.user;

  if (!isUser) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }

  return { props: {} };
};
