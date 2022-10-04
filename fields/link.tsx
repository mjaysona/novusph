import { Field } from 'payload/types';

type Data = Record<string, unknown>;

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
          label: 'Button Label',
          type: 'text',
          required: true,
          admin: {
            width: '50%',
          },
        },
        {
          name: 'type',
          label: 'Button Type',
          required: true,
          type: 'radio',
          defaultValue: 'page',
          options: [
            {
              label: 'Page',
              value: 'page',
            },
            {
              label: 'Custom URL',
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
      label: 'Button URL',
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
