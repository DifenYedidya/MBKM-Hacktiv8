import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function App() {
  const [input, setInput] = useState('')

  let post = []
  
  for(let i =1; i <= 10; i++){
    post.push({
      title: `Title ${i}`,
      description: `Deskripsi untuk title ${i}`
    })
  }
  
  let posts = []

  for(let i =1; i <= 10; i++){
    posts.push({
      title: `Title ${i}`
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native</Text>
      <ScrollView style={styles.scroll}>
        <TextInput 
          style={styles.textInput}
          placeholder="Masukan text disini"
          onChangeText={text => setInput(text)}
          defaultValue={input}
        />
        <Text style={styles.textOutput}>
          The Text : {input}
        </Text>
        {
          post.map((post, idx) => (
            <View style={styles.box} key={idx}>
              <Text style={styles.title}>{post.title}</Text>
              <Text>{post.description}</Text>
            </View>
          ))
        }
        <StatusBar style="auto" />
      </ScrollView>
      <FlatList
        data={posts}
        renderItem={({item}) => <Text style={styles.item}>{item.title}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,

  },
  scroll:{
    backgroundColor: '#c2b8a3',
    padding: 10
  },
  box: {
    backgroundColor: '#fef7dc',
    marginBottom: 10,
    padding: 10
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  textInput: {
    marginTop: 20,
    backgroundColor: '#ffffff',
    padding: 10,
    height: 40,
    borderColor: '#000',
    borderWidth: 2
  },
  textOutput: {
    marginBottom: 20,
    padding: 10, 
    fontSize: 25
  },
  item: {
    padding: 10,
    fontSize: 20,
    height: 50
  }
});
