import { Field } from 'payload/types';
import blockBasicContent from './content';

interface Fields extends Array<Field>{}

const contentWithList: Fields = [
  blockBasicContent,
  {
    name: 'listGroup',
    type: 'group',
    fields: [
      {
        name: 'description',
        label: 'List Header',
        type: 'textarea',
      },
      {
        name: 'list',
        label: 'Select list',
        type: 'relationship',
        relationTo: 'lists',
        required: true,
      },
    ],
  },
];

export default contentWithList;
