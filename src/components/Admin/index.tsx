import { useState } from 'react';
import Navbar from './navbar';
import Dashboard from './dashboard';
import AllUsers from './table/user';
import AllLawyers from './table/lawyer';
import AllAdmins from './table/admin';

export default function User() {
  const [categories, setCategories] = useState('Overview');
  return (
    <>
      <Navbar categories={categories} setCategories={setCategories} />
      {categories === 'Overview' ? <Dashboard /> : null}
      {categories === 'Users' ? <AllUsers /> : null}
      {categories === 'Lawyers' ? <AllLawyers /> : null}
      {categories === 'Admins' ? <AllAdmins /> : null}
    </>
  );
}
