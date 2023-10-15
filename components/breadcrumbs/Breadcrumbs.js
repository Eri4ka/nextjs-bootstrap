import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Breadcrumbs = ({ data }) => {
  return (
    <Breadcrumb>
      {data.map((crumb) => (
        <Breadcrumb.Item key={crumb.href} active={crumb.active}>
          <Link href={crumb.href}>{crumb.title}</Link>
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
