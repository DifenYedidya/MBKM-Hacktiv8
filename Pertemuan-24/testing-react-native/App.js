import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <Text>Absen Nama: </Text>
      <TextInput
        testID="input-name"
        onChangeText={(name) => setName(name)}
        style={styles.input}
        placeholder={"Name"}
        value={name}
      />
      <TouchableOpacity
        testID={"button-absen"}
        onPress={() => Alert.alert("nama", name)}
      >
        <View style={styles.button}>
          <Text style={styles.textButton}>Absen</Text>
        </View>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
