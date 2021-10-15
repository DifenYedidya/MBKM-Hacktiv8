import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text>Hi apps!</Text>
      <View>
        <Text>Greetings from react native</Text>
        <Image
          source={{
            uri: 'https://image.freepik.com/free-vector/happy-halloween-wallpaper-design_52683-44541.jpg',
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
}

export default App;