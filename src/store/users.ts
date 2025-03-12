// User type definition
interface User {
  id: string;
  clerkId: string;
  name: string;
  email: string;
  role?: string;
  address?: string;
  zipCode?: string;
  city?: string;
  province?: string;
  phone?: string;
  rememberAddress?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

// User store to manage in-memory users
// This is a temporary solution until we have a proper database
class UserStore {
  private users: Record<string, User> = {};

  // Save or update a user
  addUser(userData: Partial<User> & { clerkId: string }): User {
    const now = new Date().toISOString();

    // If the user already exists, update it
    if (this.users[userData.clerkId]) {
      const updatedUser = {
        ...this.users[userData.clerkId],
        ...userData,
        updatedAt: now,
      };

      this.users[userData.clerkId] = updatedUser;
      return updatedUser;
    }

    // If it's new, create with generated ID
    const newUser: User = {
      ...userData,
      id: crypto.randomUUID(),
      name: userData.name || '',
      email: userData.email || '',
      role: userData.role || 'client',
      createdAt: now,
      updatedAt: now,
    };

    this.users[userData.clerkId] = newUser;
    return newUser;
  }

  // Find a user by clerkId
  getUserByClerkId(clerkId: string): User | null {
    return this.users[clerkId] || null;
  }

  // Get all users
  getAllUsers(): User[] {
    return Object.values(this.users);
  }
}

// Export a single instance of the store (singleton)
export const userStore = new UserStore();
