import Link from 'next/link';
import { Button } from '@mantine/core';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
      <Button component={Link} href="/auth/login" color="lime.4">
        Login Page
      </Button>
    </div>
  );
}
