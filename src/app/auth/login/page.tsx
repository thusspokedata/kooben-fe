import Link from 'next/link';
import { Button } from '@mantine/core';
import styles from './page.module.css';


export default function LoginPage() {
  return (
    <div className={styles.main}>
      <Button component={Link} href="/" color="lime.4">
        Shop Page
      </Button>
      <Button component={Link} href="/" color="lime.4">
        login page
      </Button>
      <Button component={Link} href="/auth/new-account" color="lime.4">
        new account page
      </Button>
    </div>
  );
}
