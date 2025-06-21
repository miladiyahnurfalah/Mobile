

//sudah bisa menyimpan data login
import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

type User = { username: string; password: string };

type AuthStore = {
  isLoggedIn: boolean;
  user: User | null;
  registeredUsers: User[];
  login: (username: string, password: string) => boolean;
  logout: () => void;
  register: (user: User) => void;
  restoreSession: () => Promise<void>;
};

export const useAuthStore = create<AuthStore>((set, get) => ({
  isLoggedIn: false,
  user: null,
  registeredUsers: [],

  login: (username, password) => {
    const user = get().registeredUsers.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      set({ user, isLoggedIn: true });
      AsyncStorage.setItem("user", JSON.stringify(user));
      return true;
    }
    return false;
  },

  logout: () => {
    set({ user: null, isLoggedIn: false });
    AsyncStorage.removeItem("user");
  },

  register: (user) => {
    const exists = get().registeredUsers.some(
      (u) => u.username === user.username
    );
    if (!exists) {
      const newUsers = [...get().registeredUsers, user];
      set({ registeredUsers: newUsers });
      AsyncStorage.setItem("registeredUsers", JSON.stringify(newUsers));
    }
  },

  restoreSession: async () => {
    try {
      const storedUser = await AsyncStorage.getItem("user");
      const storedUsers = await AsyncStorage.getItem("registeredUsers");

      if (storedUsers) {
        set({ registeredUsers: JSON.parse(storedUsers) });
      }

      if (storedUser) {
        set({
          user: JSON.parse(storedUser),
          isLoggedIn: true,
        });
      }
    } catch (err) {
      console.error("Gagal restore session:", err);
    }
  },
}));





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
