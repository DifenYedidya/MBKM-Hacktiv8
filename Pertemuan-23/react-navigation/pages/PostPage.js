import React from 'react';
import { StyleSheet, View } from 'react-native'
import Posts from '../components/posts';
import Header from '../components/header'

export default function PostPage() {
  return(
    <View style={styles.container}>
      <Header/>
      <Posts/>
    </View>
  )  
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7c9473',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10
  }
});