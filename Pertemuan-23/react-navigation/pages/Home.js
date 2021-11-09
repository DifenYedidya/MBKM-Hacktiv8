import React from 'react';
import { Text, View, Button } from 'react-native'

const Home = ({ navigation }) => {
    return ( 
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text> Home Page </Text>
            <Button
                title={"kembali ke Posts"}
                onPress={() => navigation.navigate("PostPage")}
            />
        </View>
     );
}

export default Home;