import Breadcrumbs from '@/components/breadcrumbs';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

const breadcrumbs = [{ href: '/segments', title: 'Сегменты', active: true }];

const Segments = () => {
  return (
    <Container>
      <Breadcrumbs data={breadcrumbs} />
    </Container>
  );
};

export default Segments;
