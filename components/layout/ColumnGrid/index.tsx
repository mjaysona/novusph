import { NextPage } from 'next';
import { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

interface Props extends PropsWithChildren<{}> {
  columns: number,
}

const ColumnGrid: NextPage<Props> = ({
  columns,
  children,
}: Props) => (
  <div className={`${styles['column-grid']} ${styles[`grid---${columns}`]}`}>
    { children }
  </div>
);

export default ColumnGrid;
