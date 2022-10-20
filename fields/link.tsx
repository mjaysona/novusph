import { Field } from 'payload/types';

type Data = Record<string, unknown>;

export type Link = {
  label: string,
  type: {
    label: string,
    value: string,
  },
  page?: string,
  url?: string,
  newTab: boolean,
}

const customURLCondition = (_: Data, siblings: Data): boolean => (
  siblings.type === 'custom'
);

const link: Field = {
  name: 'link',
  type: 'group',
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'label',
          label: 'Label',
          type: 'text',
          required: true,
          admin: {
            width: '50%',
          },
        },
        {
          name: 'type',
          label: 'Type',
          required: true,
          type: 'radio',
          defaultValue: 'page',
          options: [
            {
              label: 'Link to a page',
              value: 'page',
            },
            {
              label: 'Link to a different website',
              value: 'custom',
            },
          ],
          admin: {
            width: '50%',
            layout: 'horizontal',
          },
        },
      ],
    },
    {
      name: 'page',
      label: 'Page to link to',
      type: 'relationship',
      relationTo: 'pages',
      required: true,
      admin: {
        condition: (_: Data, siblings: Data): boolean => (
          siblings.type === 'page'
        ),
      },
    },
    {
      name: 'url',
      label: 'Website link',
      type: 'text',
      required: true,
      admin: {
        condition: customURLCondition,
      },
    },
    {
      name: 'newTab',
      type: 'checkbox',
      label: 'Open in new tab',
      required: true,
      admin: {
        condition: customURLCondition,
      },
    },
  ],
};

export default link;
