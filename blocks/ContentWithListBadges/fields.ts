import { Block } from 'payload/types';
import { List } from '../../collections/List';
import blockBasicContent from '../../fields/content';
import { BlockInitialProps } from '../../interfaces/block';

export interface Props {
  content: BlockInitialProps,
  list: List,
}

export const ContentWithListBadgesBlock: Block = {
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

export default ContentWithListBadgesBlock;
