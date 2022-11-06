import { NextPage } from 'next';
import BlockWrapper from '../../components/BlockWrapper';
import ColumnGrid from '../../components/layout/ColumnGrid';
import { Props } from './fields';
import styles from './index.module.scss';

const ContentWithGenericListComponent: NextPage<Props> = ({
  content: {
    title,
    description,
  },
  listGroup,
}) => (
  <BlockWrapper>
    <div className={styles.wrapper}>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div>
        <p>{listGroup.description}</p>
        <ColumnGrid columns={2}>
          <ul>
            {listGroup?.list?.items?.map((item) => (
              <li key={item.id}><span>{item.label}</span></li>
            ))}
          </ul>
        </ColumnGrid>
      </div>
    </div>
  </BlockWrapper>
);

export default ContentWithGenericListComponent;
