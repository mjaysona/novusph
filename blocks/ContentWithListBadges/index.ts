import { Block } from 'payload/types';
import blockBasicContent from '../../fields/content';

export const ContentWithListBadges: Block = {
  slug: 'contentWithListBadges',
  labels: {
    singular: 'Content with list - Badges',
    plural: 'Content with list - Badges',
  },
  fields: [
    blockBasicContent,
    {
      name: 'list',
      label: 'Select list',
      type: 'relationship',
      relationTo: 'lists',
    },
  ],
};

export default ContentWithListBadges;
