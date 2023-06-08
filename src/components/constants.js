let counter = 0;

const generateUniqueId = () => {
  counter += 1;
  return `menu-item-${counter}`;
};

const menuItems = [
  { id: generateUniqueId(), path: '/', text: 'Home' },
  { id: generateUniqueId(), path: 'calculator', text: 'Calculator' },
  { id: generateUniqueId(), path: 'quote', text: 'Quote' },
];

export default menuItems;
