import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import Header from '../components/Header';

const MainLayout = () => {
  return (
    <div className="flex-col min-h-screen bg-gray-50">
      <Header/>
      <div className="flex flex-1">
        <Sidebar className="hidden md:block" />    
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;