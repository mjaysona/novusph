import { Block } from 'payload/types';
import { ListGroup } from '../../collections/List';
import contentWithList from '../../fields/contentWithList';
import { BlockInitialProps } from '../../interfaces/block';

export interface Props {
  content: BlockInitialProps,
  listGroup: ListGroup,
}

export const ContentWithListBadgesBlock: Block = {
  slug: 'contentWithListBadges',
  labels: {
    singular: 'Content with list - Badges',
    plural: 'Content with list - Badges',
  },
  fields: contentWithList,
};

export default ContentWithListBadgesBlock;
