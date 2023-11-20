import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import {AuthContextProvider, AuthInfo} from "../Auth";

export const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow mb-8">
        <AuthContextProvider>
          <AuthInfo />
        </AuthContextProvider>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
