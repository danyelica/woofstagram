import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [breed, setBreed] = useState("");
  const [toy, setToy] = useState("");
  const [error, setError] = useState(" ");

  useEffect(() => {
    if (password !== confirmPassword) {
      return setError("The passwords doesn't match!");
    }

    return setError("");
  }, [confirmPassword]);

  return (
    <View style={styles.container}>
      <Text>{error}</Text>
      <Input
        label='E-mail'
        placeholder='enter your email'
        setValue={setEmail}
        value={email}
      />
      <Input
        label='Password'
        placeholder='enter your password'
        secureTextEntry={true}
        value={password}
        setValue={setPassword}
      />
      <Input
        label='Confirm Password'
        placeholder='enter your password again'
        secureTextEntry={true}
        value={confirmPassword}
        setValue={setConfirmPassword}
      />
      <Input
        label={`Pet's Name`}
        placeholder={`enter your pet's`}
        value={name}
        setValue={setName}
      />
      <Input
        label={`Pet's Birthday`}
        placeholder={`enter your pet's birthday`}
        value={birthday}
        setValue={setBirthday}
      />
      <Input
        label='Breed'
        placeholder={`enter your pet's breed`}
        value={breed}
        setValue={setBreed}
      />
      <Input
        label='Favorite Toy'
        placeholder={`enter it's favorite toy`}
        value={toy}
        setValue={setToy}
      />
    </View>
  );
}

function Input({
  label,
  placeholder,
  value,
  setValue,
  callback,
  secureTextEntry,
}) {
  return (
    <ScrollView>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        style={[styles.text, { backgroundColor: "#fff" }]}
        value={value}
        placeholder={placeholder}
        onChangeText={setValue}
        secureTextEntry={secureTextEntry}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ecf0f1",
    justifyContent: "center",
  },
  text: {
    padding: 8,
    fontSize: 18,
  },
});
