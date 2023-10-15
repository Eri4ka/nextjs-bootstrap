import Sidebar from '@/components/sidebar';

const Layout = ({ children }) => {
  return (
    <div className="d-flex min-vh-100">
      <Sidebar />
      <div className="bg-body-secondary flex-fill p-4">{children}</div>
    </div>
  );
};

export default Layout;
