import Link from 'next/link';
import { Button } from '@mantine/core';
import styles from './page.module.css';

export default function NewAccountPage() {
  return (
    <div className={styles.main}>
      <h1>new account</h1>
      <Button component={Link} href="/" color="lime.4">
        shop Page
      </Button>
      <Button component={Link} href="/auth/login" color="lime.4">
        login Page
      </Button>
    </div>
  );
}
