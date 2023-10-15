import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cl from 'classnames';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

import styles from './Sidebar.module.scss';

const navsList = [
  { id: 1, title: 'Сегменты', href: '/segments' },
  { id: 2, title: 'Пользователи', href: '/users' },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleToggleSidebar = () => {
    setIsOpen((current) => !current);
  };

  return (
    <div className={cl(styles.Sidebar, { [styles['Sidebar_open']]: isOpen })}>
      <div className={styles['Sidebar__wrapper']}>
        <ListGroup className="mt-5">
          {navsList.map((item) => (
            <ListGroup.Item
              key={item.id}
              action
              active={router.pathname.startsWith(item.href)}
            >
              <Link href={item.href} className="text-truncate">
                {item.title}
              </Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Button
          variant="light"
          onClick={handleToggleSidebar}
          className="align-self-center"
        >
          Open
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
