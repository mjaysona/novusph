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
      name: 'blockHeaderDescription',
      label: 'Block Header Description',
      type: 'textarea',
    },
    {
      name: 'blockFooterDescription',
      label: 'Block Footer Description',
      type: 'textarea',
    },
  ],
};

export default blockBasicContent;
