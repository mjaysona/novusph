import { Field } from 'payload/types';

export type Type = {
  backgroundColor: 'light-gray' | 'white' | 'dark-denim'
}

const container: Field = {
  name: 'container',
  type: 'group',
  fields: [
    {
      name: 'backgroundColor',
      label: 'Background Color',
      type: 'radio',
      required: true,
      defaultValue: 'white',
      options: [
        {
          label: 'White',
          value: 'white',
        },
        {
          label: 'Light gray',
          value: 'lightGray',
        },
        {
          label: 'Dark denim',
          value: 'darkDenim',
        },
      ],
    },
  ],
};

export default container;
