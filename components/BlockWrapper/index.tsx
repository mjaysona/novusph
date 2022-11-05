import { NextPage } from 'next';
import { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

interface Props extends PropsWithChildren<{}> {
  backgroundColor?: string,
}

const BlockWrapper: NextPage<Props> = ({
  backgroundColor,
  children,
}: Props) => (
  <div className={`${styles.container} ${styles[backgroundColor]}`}>
    <div className={styles.wrapper}>
      { children }
    </div>
  </div>
);

export default BlockWrapper;
