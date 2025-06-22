// File: store/AuthStore.ts
import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

type User = {
  username: string;
  email: string;
  password: string;
};

type AuthStore = {
  users: User[];
  currentUser: User | null;
  isLoggedIn: boolean;
  login: (username: string, password: string) => 'success' | 'not_found' | 'wrong_password';
  register: (user: User) => boolean;
  updatePassword: (username: string, newPassword: string) => Promise<boolean>;
  logout: () => void;
  restoreSession: () => Promise<void>;
};

export const useAuthStore = create<AuthStore>((set, get) => ({
  users: [],
  currentUser: null,
  isLoggedIn: false,

  login: (username, password) => {
    const { users } = get();
    const user = users.find((u) => u.username === username);
    if (!user) return 'not_found';
    if (user.password !== password) return 'wrong_password';
    set({ currentUser: user, isLoggedIn: true });
    AsyncStorage.setItem('currentUser', JSON.stringify(user));
    return 'success';
  },

  register: (newUser) => {
    const { users } = get();
    const exists = users.some((u) => u.username === newUser.username);
    if (exists) return false;
    const updatedUsers = [...users, newUser];
    set({ users: updatedUsers });
    AsyncStorage.setItem('users', JSON.stringify(updatedUsers));
    return true;
  },

  updatePassword: async (username, newPassword) => {
    const { users } = get();
    const userExists = users.find((u) => u.username === username);
    if (!userExists) return false;

    const updatedUsers = users.map((user) =>
      user.username === username ? { ...user, password: newPassword } : user
    );

    await AsyncStorage.setItem('users', JSON.stringify(updatedUsers));
    set({ users: updatedUsers });

    // Perbarui currentUser jika user sedang login
    const currentUser = updatedUsers.find((u) => u.username === username);
    if (currentUser) {
      await AsyncStorage.setItem('currentUser', JSON.stringify(currentUser));
      set({ currentUser });
    }

    return true;
  },

  logout: () => {
    set({ currentUser: null, isLoggedIn: false });
    AsyncStorage.removeItem('currentUser');
  },

  restoreSession: async () => {
    const userJson = await AsyncStorage.getItem('currentUser');
    const usersJson = await AsyncStorage.getItem('users');
    const user = userJson ? JSON.parse(userJson) : null;
    const users = usersJson ? JSON.parse(usersJson) : [];
    set({ currentUser: user, isLoggedIn: !!user, users });
  },
}));



// File: store/AuthStore.ts
// import { create } from 'zustand';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// type User = {
//   username: string;
//   email: string;
//   password: string;
// };

// type AuthStore = {
//   users: User[];
//   currentUser: User | null;
//   isLoggedIn: boolean;
//   login: (username: string, password: string) => 'success' | 'not_found' | 'wrong_password';
//   register: (user: User) => boolean;
//   updatePassword: (username: string, newPassword: string) => void;
//   logout: () => void;
//   restoreSession: () => Promise<void>;
// };

// export const useAuthStore = create<AuthStore>((set, get) => ({
//   users: [],
//   currentUser: null,
//   isLoggedIn: false,

//   login: (username, password) => {
//     const { users } = get();
//     const user = users.find((u) => u.username === username);
//     if (!user) return 'not_found';
//     if (user.password !== password) return 'wrong_password';
//     set({ currentUser: user, isLoggedIn: true });
//     AsyncStorage.setItem('currentUser', JSON.stringify(user));
//     return 'success';
//   },

//   register: (newUser) => {
//     const { users } = get();
//     const exists = users.some((u) => u.username === newUser.username);
//     if (exists) return false;
//     const updatedUsers = [...users, newUser];
//     set({ users: updatedUsers });
//     AsyncStorage.setItem('users', JSON.stringify(updatedUsers));
//     return true;
//   },

//   updatePassword: (username, newPassword) => {
//     const { users } = get();
//     const updatedUsers = users.map((user) =>
//       user.username === username ? { ...user, password: newPassword } : user
//     );
//     set({ users: updatedUsers });
//     AsyncStorage.setItem('users', JSON.stringify(updatedUsers));

//     const currentUser = updatedUsers.find((u) => u.username === username);
//     if (currentUser) {
//       set({ currentUser });
//       AsyncStorage.setItem('currentUser', JSON.stringify(currentUser));
//     }
//   },

//   logout: () => {
//     set({ currentUser: null, isLoggedIn: false });
//     AsyncStorage.removeItem('currentUser');
//   },

//   restoreSession: async () => {
//     const userJson = await AsyncStorage.getItem('currentUser');
//     const usersJson = await AsyncStorage.getItem('users');
//     const user = userJson ? JSON.parse(userJson) : null;
//     const users = usersJson ? JSON.parse(usersJson) : [];
//     set({ currentUser: user, isLoggedIn: !!user, users });
//   },
// }));



//ini sudah benar
// import { create } from 'zustand';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export interface User {
//   username: string;
//   email: string;
//   password: string;
// }

// interface AuthState {
//   isLoggedIn: boolean;
//   currentUser: User | null;
//   registeredUsers: User[];

//   restoreSession: () => Promise<void>;
//   register: (user: User) => Promise<boolean>;
//   login: (username: string, password: string) => boolean;
//   logout: () => void;
//   updatePassword: (username: string, newPassword: string) => void;
// }

// export const useAuthStore = create<AuthState>((set, get) => ({
//   isLoggedIn: false,
//   currentUser: null,
//   registeredUsers: [],

//   // Mengambil data dari AsyncStorage saat app dibuka
//   restoreSession: async () => {
//     try {
//       const userString = await AsyncStorage.getItem('currentUser');
//       const usersString = await AsyncStorage.getItem('registeredUsers');

//       const currentUser = userString ? JSON.parse(userString) : null;
//       const registeredUsers = usersString ? JSON.parse(usersString) : [];

//       set({
//         currentUser,
//         isLoggedIn: !!currentUser,
//         registeredUsers,
//       });
//     } catch (e) {
//       console.error('Gagal me-restore sesi:', e);
//     }
//   },

//   // Mendaftarkan user baru
//   register: async (newUser) => {
//     try {
//       const existingUsers = get().registeredUsers;
//       const isDuplicate = existingUsers.some(
//         (u) => u.username === newUser.username
//       );
//       if (isDuplicate) return false;

//       const updatedUsers = [...existingUsers, newUser];

//       set({ registeredUsers: updatedUsers });

//       await AsyncStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));
//       return true;
//     } catch (error) {
//       console.error('Register error:', error);
//       return false;
//     }
//   },

//   // Login user
//   login: (username, password) => {
//     const users = get().registeredUsers;
//     const user = users.find(
//       (u) => u.username === username && u.password === password
//     );

//     if (user) {
//       set({ currentUser: user, isLoggedIn: true });
//       AsyncStorage.setItem('currentUser', JSON.stringify(user));
//       return true;
//     }

//     return false;
//   },

//   // Logout
//   logout: () => {
//     set({ currentUser: null, isLoggedIn: false });
//     AsyncStorage.removeItem('currentUser');
//   },

//   // Reset password
//   updatePassword: (username, newPassword) => {
//     const users = get().registeredUsers;
//     const updatedUsers = users.map((u) =>
//       u.username === username ? { ...u, password: newPassword } : u
//     );

//     set({ registeredUsers: updatedUsers });

//     AsyncStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));
//   },
// }));















//sudah bisa menyimpan data login
// import { create } from "zustand";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// type User = { username: string; password: string };

// type AuthStore = {
//   isLoggedIn: boolean;
//   user: User | null;
//   registeredUsers: User[];
//   login: (username: string, password: string) => boolean;
//   logout: () => void;
//   register: (user: User) => void;
//   restoreSession: () => Promise<void>;
// };

// export const useAuthStore = create<AuthStore>((set, get) => ({
//   isLoggedIn: false,
//   user: null,
//   registeredUsers: [],

//   login: (username, password) => {
//     const user = get().registeredUsers.find(
//       (u) => u.username === username && u.password === password
//     );
//     if (user) {
//       set({ user, isLoggedIn: true });
//       AsyncStorage.setItem("user", JSON.stringify(user));
//       return true;
//     }
//     return false;
//   },

//   logout: () => {
//     set({ user: null, isLoggedIn: false });
//     AsyncStorage.removeItem("user");
//   },

//   register: (user) => {
//     const exists = get().registeredUsers.some(
//       (u) => u.username === user.username
//     );
//     if (!exists) {
//       const newUsers = [...get().registeredUsers, user];
//       set({ registeredUsers: newUsers });
//       AsyncStorage.setItem("registeredUsers", JSON.stringify(newUsers));
//     }
//   },

//   restoreSession: async () => {
//     try {
//       const storedUser = await AsyncStorage.getItem("user");
//       const storedUsers = await AsyncStorage.getItem("registeredUsers");

//       if (storedUsers) {
//         set({ registeredUsers: JSON.parse(storedUsers) });
//       }

//       if (storedUser) {
//         set({
//           user: JSON.parse(storedUser),
//           isLoggedIn: true,
//         });
//       }
//     } catch (err) {
//       console.error("Gagal restore session:", err);
//     }
//   },
// }));





// import { create } from "zustand";

// type User = { username: string; password: string };
// type AuthStore = {
//   isLoggedIn: boolean;
//   user: User | null;
//   registeredUsers: User[];
//   login: (username: string, password: string) => boolean;
//   logout: () => void;
//   register: (user: User) => void;
// };

// export const useAuthStore = create<AuthStore>((set, get) => ({
//   isLoggedIn: false,
//   user: null,
//   registeredUsers: [],
//   login: (username, password) => {
//     const user = get().registeredUsers.find(
//       (u) => u.username === username && u.password === password
//     );
//     if (user) {
//       set({ user, isLoggedIn: true });
//       return true;
//     }
//     return false;
//   },
//   logout: () => set({ user: null, isLoggedIn: false }),
//   register: (user) => {
//     const exists = get().registeredUsers.some(
//       (u) => u.username === user.username
//     );
//     if (!exists) {
//       set((state) => ({
//         registeredUsers: [...state.registeredUsers, user],
//       }));
//     }
//   },
// }));
