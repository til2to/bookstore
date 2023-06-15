import { v4 as uuidv4 } from 'uuid';

// let counter = 0;

// const generateUniqueId = () => {
//   counter += 1;
//   return `menu-item-${counter}`;
// };

const menuItems = [
  { id: uuidv4(), path: '/', text: 'Books' },
  { id: uuidv4(), path: 'categories', text: 'Categories' },
];

const bookButtons = [
  { id: uuidv4(), title: 'Comments' },
  { id: uuidv4(), title: 'Remove' },
  { id: uuidv4(), title: 'Edit' },
];

export { menuItems, bookButtons };
