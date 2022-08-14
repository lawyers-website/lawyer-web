import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { trpc } from '../utils/trpc';

const Hello = () => {
  const { data: session, status } = useSession();

  console.log(session);
  useEffect(() => {
    console.log(session?.user, status);
  }, [session, status]);
  return <h1>It is working</h1>;
};

export default Hello;
