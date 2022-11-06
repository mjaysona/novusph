import { Block } from 'payload/types';
import { ListGroup } from '../../collections/List';
import contentWithList from '../../fields/contentWithList';
import { BlockInitialProps } from '../../interfaces/block';

export interface Props {
  content: BlockInitialProps,
  listGroup: ListGroup,
}

export const ContentWithGenericListBlock: Block = {
  slug: 'contentWithGenericList',
  labels: {
    singular: 'Content with list - Generic',
    plural: 'Content with list - Generic',
  },
  fields: contentWithList,
};

export default ContentWithGenericListBlock;
