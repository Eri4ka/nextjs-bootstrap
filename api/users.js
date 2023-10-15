import { request } from './request';

export async function getAllUsers(params) {
  const response = await request(`api/users?${new URLSearchParams(params)}`);
  return response;
}
