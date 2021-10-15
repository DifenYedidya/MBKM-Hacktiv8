import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View, TextInput, Button, ScrollView } from 'react-native';
import Header from './header'
import Post from './Post'

export default function Posts() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [isLoading, setLoading] = useState(true);
    // const [data, setData] = useState([]);
    const [posts, setPosts] = useState([]);
    
    const getAPI = async () => {
        try {
          const response = await fetch('http://192.168.1.5:4000/posts');
          const json = await response.json();
        //   const posts = json.split(',');
          setPosts(json);
      } catch (error) {
          console.error(error);
      } finally {
          setLoading(false);
      }
    }
    
    const addPost = () => {
        fetch('http://192.168.1.5:4000/posts', {
            method: 'POST',
            headers: {
                "content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({ title, description })
        })
            .then(res => res.json())
            .then(data => setPosts([...posts, data]))
            .catch(err => console.log(err))
    }

    const deleteFromState = (id) => {
        let tmp = [...posts]
        tmp.splice(id, 1)
        setPosts(tmp)
    }   
  
    useEffect(() => {
      getAPI();
    }, []);
  
    return (
      
        <View style={styles.container}>
              <Header/>
              <View style={styles.scroll}>
                  <TextInput 
                      placeholder='Title'
                      placeholderTextColor='#ffffff'
                      style={styles.txtInput}
                      onChangeText={text => setTitle(text)}
                      defaultValue={title}
                  />
                  <TextInput
                      placeholder='Description'
                      placeholderTextColor='#ffffff'
                      style={styles.txtInput}
                      onChangeText={text => setDescription(text)}
                      defaultValue={description}
                  />
                  <Button
                      color='blue'
                      title='Save'
                      onPress={addPost}
                  />
              </View>
              {isLoading ? <ActivityIndicator/> : (
                <ScrollView style={styles.scroll}>
                {
                    posts.map((post, idx) => (
                        <Post
                            key={post.id}
                            post={post}
                            idx={idx}
                            deleteFromState={deleteFromState} />
                    ))
                }
                </ScrollView>
              )}
          <StatusBar style="auto" />
        </View>
  
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#7c9473',
      flexDirection: 'column',
      justifyContent: 'center',
      marginTop: 40,
      padding: 10
    },
    box: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#FEF9EF',
      padding: 10,
      margin: 6
    },
    header: {
      padding: 10,
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold'
    },
    thumbnail: {
      width: 50,
      height: 50,
      padding: 2
    },
    detail: {
      flex: 1,
      flexDirection: 'column'
    },
    desName: {
      paddingLeft: 10
    },
    bold: {
      fontWeight: 'bold'
    },
    scroll: {
        padding: 10
    },
    txtInput: {
        color: '#ffffff',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ffffff',
        marginBottom: 10
    }
  });