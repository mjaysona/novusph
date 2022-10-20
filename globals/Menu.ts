import { GlobalConfig } from 'payload/types';
import link from '../fields/link';

const Menu: GlobalConfig = {
  slug: 'menu',
  label: 'Menu',
  fields: [
    {
      name: 'menu',
      labels: {
        singular: 'Menu Item',
        plural: 'Menu Items',
      },
      type: 'array',
      fields: [
        link,
      ],
    },
  ],
};

export default Menu;
