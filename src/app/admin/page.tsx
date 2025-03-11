'use client';

import { useAuthSync } from '@/providers/AuthSyncProvider';
import { useUser } from '@clerk/nextjs';
import { Container, Paper, Title, Text, Group, Badge, Loader, Stack } from '@mantine/core';

export default function AdminPage() {
  const { isSyncing, isSynced, userInDb } = useAuthSync();
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return (
      <Container py="xl" style={{ textAlign: 'center' }}>
        <Loader size="lg" />
        <Text mt="md">Loading authentication status...</Text>
      </Container>
    );
  }

  if (!isSignedIn) {
    return (
      <Container py="xl">
        <Paper p="xl" shadow="md" withBorder>
          <Title order={3} mb="md">
            Admin Access
          </Title>
          <Text c="red">You must be signed in to view this page.</Text>
        </Paper>
      </Container>
    );
  }

  return (
    <Container py="xl">
      <Paper p="xl" shadow="md" withBorder mb="xl">
        <Title order={3} mb="lg">
          User Synchronization Status
        </Title>

        <Stack>
          <Group>
            <Text fw={600}>Authentication:</Text>
            <Badge color="green">Authenticated with Clerk</Badge>
          </Group>

          <Group>
            <Text fw={600}>Sync Status:</Text>
            {isSyncing ? (
              <Badge color="yellow">Synchronizing...</Badge>
            ) : isSynced ? (
              <Badge color="green">Synchronized</Badge>
            ) : (
              <Badge color="red">Not Synchronized</Badge>
            )}
          </Group>

          <Group>
            <Text fw={600}>Clerk User ID:</Text>
            <Text>{user?.id}</Text>
          </Group>

          <Text fw={600}>Database Record:</Text>
          {isSyncing ? (
            <Group>
              <Loader size="sm" />
              <Text>Checking database...</Text>
            </Group>
          ) : userInDb ? (
            <Paper p="md" withBorder bg="gray.0">
              <pre style={{ margin: 0 }}>{JSON.stringify(userInDb, null, 2)}</pre>
            </Paper>
          ) : (
            <Text c="dimmed">No database record found</Text>
          )}
        </Stack>
      </Paper>

      <Paper p="xl" shadow="md" withBorder>
        <Title order={3} mb="md">
          Admin Dashboard
        </Title>
        <Text>This is a protected admin page that shows how the AuthSyncProvider works.</Text>
        <Text mt="sm">
          The AuthSyncProvider automatically ensures that authenticated users are synchronized with
          the backend database before they can interact with the application.
        </Text>
      </Paper>
    </Container>
  );
}
