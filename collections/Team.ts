import { CollectionConfig } from 'payload/types';

type Items = {
  label: string,
  hasDesription: boolean,
  description: {
    description: string,
  }[],
}

export type Type = {
  listName: string,
  items: Items[],
}

const Team: CollectionConfig = {
  slug: 'team',
  labels: {
    singular: 'Team Member',
    plural: 'Team Members',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: [
      'name',
      'contact',
    ],
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      required: true,
      type: 'text',
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
    },
    {
      name: 'position',
      labels: {
        singular: 'Position',
        plural: 'Positions',
      },
      required: true,
      type: 'array',
      fields: [
        {
          name: 'label',
          label: 'Label',
          type: 'text',
        },
      ],
    },
  ],
};

export default Team;
