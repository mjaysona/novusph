import { CollectionConfig } from 'payload/types';

type Data = Record<string, unknown>;

interface Items {
  label: string,
  hasDesription: boolean,
  description: {
    description: string,
  }[],
  id: string,
}

export interface List {
  listName: string,
  items: Items[],
}

const List: CollectionConfig = {
  slug: 'lists',
  admin: {
    useAsTitle: 'listName',
    defaultColumns: [
      'listName',
      'items',
      'updatedAt',
    ],
  },
  fields: [
    {
      name: 'listName',
      label: 'List name',
      required: true,
      type: 'text',
    },
    {
      name: 'items',
      labels: {
        singular: 'Item',
        plural: 'Items',
      },
      required: true,
      type: 'array',
      fields: [
        {
          name: 'label',
          label: 'Label',
          type: 'text',
        },
        {
          name: 'hasDescription',
          label: 'Has description?',
          type: 'checkbox',
        },
        {
          name: 'description',
          labels: {
            singular: 'Description',
            plural: 'Descriptions',
          },
          type: 'array',
          admin: {
            condition: (_: Data, siblings: Data): boolean => (
              siblings.hasDescription === true
            ),
          },
          fields: [
            {
              name: 'description',
              label: 'Description',
              type: 'textarea',
              required: true,
            },
          ],
        },
      ],
    },
  ],
};

export default List;
