import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, ActivityIndicator, FlatList } from 'react-native';

export default function App() {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getProfile = async () => {
     try {
        const response = await fetch('https://randomuser.me/api/?results=20');
        const json = await response.json();
        setData(json.results);
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
  }

  useEffect(() => {
    getProfile();
  }, []);
  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Customer</Text>

      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ ind }) => ind}
          renderItem={({ item }) => (
            <>
              <View style={styles.box}>
              <Image
                style={styles.thumbnail}
                source={{uri: item.picture.medium}}
              />
              <View style={styles.detail}>
                <Text style={[styles.desName, styles.bold]}>{item.name.first} {item.name.last}</Text>
                <Text style={styles.desName}>{item.location.street.number} {item.location.street.name} {item.location.city} {item.location.state} {item.location.country}</Text>
              </View>              
            </View>
            </>
          )}
        />
      )}
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF865E',
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
  }
});
