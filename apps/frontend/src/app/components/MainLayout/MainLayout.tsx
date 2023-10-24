import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow mb-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
