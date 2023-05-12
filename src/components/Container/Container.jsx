import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export default function Container() {
  return (
    <main>
      Wellcome
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
}
