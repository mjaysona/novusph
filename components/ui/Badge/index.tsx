import { NextPage } from 'next';
import styles from './styles.module.scss';

interface AppProps {
  label: string,
}

const Badge: NextPage<AppProps> = ({ label }:AppProps) => (
  <div className={styles.badge}>
    {label}
  </div>
);

export default Badge;
