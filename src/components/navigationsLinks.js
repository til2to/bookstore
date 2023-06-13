let counter = 0;

const generateUniqueId = () => {
  counter += 1;
  return `menu-item-${counter}`;
};

const menuItems = [
  { id: generateUniqueId(), path: '/', text: 'Books' },
  { id: generateUniqueId(), path: 'categories', text: 'Categories' },
];

const bookButtons = [
  { id: generateUniqueId(), title: 'Comments' },
  { id: generateUniqueId(), title: 'Remove' },
  { id: generateUniqueId(), title: 'Edit' },
];

export { menuItems, bookButtons, generateUniqueId };
