import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

export default function Post({ post, idx, deleteFromState, updatePost }) {
  const deletePost = () => {
    fetch(`http://192.168.1.5:4000/posts/${post.id}`, {
      method: "DELETE",
    })
      .then(() => deleteFromState(idx))
      .catch((err) => console.log(err));
  };

  const updatingPost = () => {
    fetch(`http://192.168.1.5:4000/posts/${post.id}`, {
      method: "PUT",
    })
      .then(() => updatePost(idx))
      // .then((res) => {
      //     console.log("res update: ", res);
      //     setTitle("");
      //     setDescription("");
      //     getAPI();
      //     setButton("Save");
      // });
      .catch((err) => console.log(err));
  };
  return (
    <View style={styles.box}>
      <View style={{ flex: 7 }}>
        <Text style={styles.title}>{post.title}</Text>
        <Text>{post.description}</Text>
      </View>
      <TouchableOpacity style={{ flex: 3 }}>
        <Button title="Update" color="cyan" onPress={updatingPost} />
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <Button title="X" color="red" onPress={deletePost} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#e8eae6",
    marginBottom: 10,
    padding: 7,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
