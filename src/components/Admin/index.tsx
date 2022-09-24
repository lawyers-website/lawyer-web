import { useState } from 'react';
import Navbar from './navbar';
import Dashboard from './dashboard';
import Tables from './table';
import type { User } from '@prisma/client';

export default function User1({
  users,
  lawyers,
  admins,
}: {
  users: User[];
  lawyers: User[];
  admins: User[];
}) {
  const [categories, setCategories] = useState('Overview');
  const Users = [
    { Username: 'John', email: 'john@gmail.com', number: 7983678376 },
    { Username: 'lynn', email: 'lynn@gmail.com', number: 6476384783 },
    { Username: 'Test', email: 'test@gmail.com', number: 8467687363 },
    { Username: 'Peter', email: 'peter@gmail.com', number: 7467673647 },
    { Username: 'Tony', email: 'tony@gmail.com', number: 9783467364 },
    { Username: 'Thor', email: 'thor@gmail.com', number: 8128673628 },
    { Username: 'John', email: 'john@gmail.com', number: 7983678376 },
  ];
  return (
    <>
      <Navbar categories={categories} setCategories={setCategories} />
      {categories === 'Overview' ? <Dashboard /> : null}
      {categories === 'Users' ? <Tables Users={users} heading='Users' /> : null}
      {categories === 'Lawyers' ? (
        <Tables Users={lawyers} heading='Lawyers' />
      ) : null}
      {categories === 'Admins' ? (
        <Tables Users={admins} heading='Admins' />
      ) : null}
    </>
  );
}
