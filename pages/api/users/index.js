import { users } from '../data/users';

const availableOrders = [
  {
    query: 'orderName',
    field: 'name',
    type: 'string',
  },
  {
    query: 'orderSex',
    field: 'sex',
    type: 'string',
  },
  {
    query: 'orderAge',
    field: 'age',
    type: 'number',
  },
];

const availableFilters = ['sex', 'boba'];

function getOrderSchema(field, fieldType, orderType) {
  if (fieldType === 'string') {
    return function (a, b) {
      if (orderType === 'asc') {
        return a[field].toLowerCase() > b[field].toLowerCase() ? 1 : -1;
      }
      return a[field].toLowerCase() < b[field].toLowerCase() ? 1 : -1;
    };
  }

  if (fieldType === 'number') {
    return function (a, b) {
      if (orderType === 'asc') {
        return b[field] - a[field] ? 1 : -1;
      }
      return a[field] - b[field] ? 1 : -1;
    };
  }
}

export default function getAllUsers(req, res) {
  if (req.method !== 'GET') {
    res.status(405).send();
  }

  let newUsers = [...users];
  const activeOrder = availableOrders.find((item) => req.query[item.query]);

  if (activeOrder) {
    const activeOrderValue = req.query[activeOrder.query];
    newUsers.sort(
      getOrderSchema(activeOrder.field, activeOrder.type, activeOrderValue)
    );
  }

  const activeFilters = {};

  function getActiveFilters() {
    for (let key in req.query) {
      if (availableFilters.includes(key) && !key) {
        activeFilters[key] = req.query[key];
      }
    }
  }
  getActiveFilters();

  if (Object.keys(activeFilters).length !== 0) {
    function getFilteredUsers() {
      for (let key in activeFilters) {
        return newUsers.filter((user) => user[key] === activeFilters[key]);
      }
    }

    newUsers = getFilteredUsers();
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(res.json(newUsers));
    }, 2000);
  });
}
