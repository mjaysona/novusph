import { Field } from 'payload/types';

const blockBasicContent: Field = {
  name: 'content',
  type: 'group',
  fields: [
    {
      name: 'title',
      label: 'Block Title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
    },
    {
      name: 'footerText',
      label: 'Footer Text',
      type: 'textarea',
    },
  ],
};

export default blockBasicContent;
