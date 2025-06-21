

//INI YANG BENAR 
import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuthStore } from "@/store/AuthStore";

export default function RegisterScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const register = useAuthStore((state) => state.register);
  const navigation = useNavigation();

  const handleRegister = () => {
    register({ username, password });
    alert("Registrasi berhasil. Silakan login.");
    navigation.navigate("Login" as never);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
    >
      <View style={styles.card}>
        <Text style={styles.title}>Buat Akun Baru</Text>
        <Text style={styles.subtitle}>Lengkapi form di bawah ini</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#9ca3af"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#9ca3af"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <Text
          style={styles.link}
          onPress={() => navigation.navigate("Login" as never)}
        >
          Sudah punya akun? <Text style={styles.linkStrong}>Login</Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    maxWidth: 380,
    backgroundColor: "#fff",
    padding: 28,
    borderRadius: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 12,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#1e293b",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#64748b",
    textAlign: "center",
    marginBottom: 24,
  },
  input: {
    backgroundColor: "#f8fafc",
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    marginBottom: 16,
    color: "#111827",
  },
  button: {
    backgroundColor: "#7c3aed",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  link: {
    color: "#64748b",
    textAlign: "center",
    fontSize: 14,
  },
  linkStrong: {
    color: "#7c3aed",
    fontWeight: "bold",
  },
});
