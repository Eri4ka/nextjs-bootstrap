import useSWR from 'swr';
import Breadcrumbs from '@/components/breadcrumbs';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import { getAllUsers } from '@/api/users';
import TablePlaceholder from '@/components/placeholders/table-placeholder';
import OrderButton from '@/components/order-button';
import { useRouter } from 'next/router';
import UserFilter from '@/components/user-filter';

const breadcrumbs = [{ href: '/users', title: 'Пользователи', active: true }];

const Users = () => {
  const router = useRouter();

  const { data: users, isLoading } = useSWR(router.query, getAllUsers);

  return (
    <Container>
      <Breadcrumbs data={breadcrumbs} />
      <UserFilter />
      <Table hover>
        <thead>
          <tr>
            <th>
              Name <OrderButton queryName={'orderName'} />
            </th>
            <th>
              Sex <OrderButton queryName={'orderSex'} />
            </th>
            <th>
              Age <OrderButton queryName={'orderAge'} />
            </th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <TablePlaceholder />
          ) : (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.sex}</td>
                <td>{user.age}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default Users;
