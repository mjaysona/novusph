import { NextPage } from 'next';
import BlockWrapper from '../../components/BlockWrapper';
import ColumnGrid from '../../components/layout/ColumnGrid';
import Badge from '../../components/ui/Badge';
import { Props } from './fields';
import styles from './index.module.css';

const ContentWithListBadgesComponent: NextPage<Props> = ({
  content: {
    title,
    description,
  },
  list,
}) => (
  <BlockWrapper backgroundColor="gray">
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <ColumnGrid columns={3}>
        {list.items.map((item) => (
          <Badge
            key={item.id}
            label={item.label}
          />
        ))}
      </ColumnGrid>
    </div>
  </BlockWrapper>
);

export default ContentWithListBadgesComponent;
