import { StatusBar } from 'expo-status-bar';
import React, { useEffect, createContext, useContext, useState } from 'react';
import { StyleSheet, Text, Image, View, ActivityIndicator, FlatList, Button } from 'react-native';

const genders = { male, female }

// const genderContext = createContext({
//   male = user.filter((user) => user.gender === "male"),
//   female = user.filter((user) => user.gender === "female")

// });

export default function App() {

  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState([]);
  const [gender, setGender] = useState([]);

  const getProfile = async () => {
     try {
        const response = await fetch('https://randomuser.me/api/?results=20');
        const json = await response.json();
        setUser(json.results);
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
    <genderContext.Provider value={gender}>
      <View style={styles.container}>
        <Text style={styles.header}>Customer</Text>
        <Button title='Male only' color='black' onPress={() => setGender(genders.male = user.filter((user) => user.gender === "male"))} />
        <Button title='Female only' color='pink' onPress={() => setGender(genders.female = user.filter((user) => user.gender === "female"))} />
        {isLoading ? <ActivityIndicator/> : (
            <FlatList
              data={user}
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
    </genderContext.Provider>
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
