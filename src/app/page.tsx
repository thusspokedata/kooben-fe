import Link from 'next/link';
import { Button } from '@mantine/core';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Button component={Link} href="/hello">
        Next link button
      </Button>
    </main>
  );
}
