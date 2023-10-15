import { useState } from 'react';
import { useRouter } from 'next/router';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

const UserFilter = () => {
  const router = useRouter();
  const [selectedSex, setSelectedSex] = useState('');

  const handleChange = (event) => {
    setSelectedSex(event);
  };

  const handleSubmit = () => {
    router.replace({
      query: {
        ...router.query,
        sex: selectedSex,
      },
    });
  };

  const handleReset = () => {
    setSelectedSex('');
    const { sex, ...params } = router.query;
    router.replace({
      query: {
        ...params,
      },
    });
  };

  return (
    <Row className="mb-3 justify-content-end">
      <Col xs={2}>
        <Dropdown onSelect={handleChange}>
          <Dropdown.Toggle id="dropdown-basic">
            {selectedSex || 'Sex'}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="female">female</Dropdown.Item>
            <Dropdown.Item eventKey="male">male</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
      <Col xs={2}>
        <Button variant="outline-primary" onClick={handleSubmit}>
          Применить
        </Button>
      </Col>
      <Col xs={2}>
        <Button variant="dark" onClick={handleReset}>
          Сбросить
        </Button>
      </Col>
    </Row>
  );
};

export default UserFilter;
