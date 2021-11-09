import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.header}
        source={require("../assets/backgroundProfile.png")}
      />
      <Image
        style={styles.avatar}
        source={require("../assets/profilePic.png")}
      />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>Difen Yedidya Sjamsu</Text>
          <Text style={styles.info}>
            Front End Developer / Mobile developer
          </Text>
          <Text style={styles.description}>
            Difen Yedidya, a student of Informatics Technology Major at Esa
            Unggul University focusing on Mobile Development, is currently in
            his 7th semester. Being an enthusiastic learner, at the moment,
            Difen is learning Front-end programming with React.Js for website
            and React Native for mobile. Currently participate on Magang -
            Kampus Merdeka program and working as Front End Developer Intern at
            Hacktiv8.
          </Text>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("PostPage")}
          >
            <Text>Post Page</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("Home")}
          >
            <Text>Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00BFFF",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600",
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
});

export default Profile;
