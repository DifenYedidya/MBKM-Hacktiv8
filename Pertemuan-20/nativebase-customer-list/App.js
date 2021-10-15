import React, { useEffect, useState } from 'react';
import {
  NativeBaseProvider,
  Box,
  Heading,
  FlatList,
  HStack,
  VStack,
  Text,
  Pressable,
  Image,
  StatusBar
} from 'native-base'
import { ActivityIndicator} from 'react-native';

export const View = () => {

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
    <Box
      w={{
        base: "100%",
        md: "25%",
      }}
    >
      <Heading fontSize="xl" p="4" pb="3">
        Customer
      </Heading>
      {isLoading ? <ActivityIndicator/> : (
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Box
            borderBottomWidth="1"
            _dark={{
              borderColor: "gray.600",
            }}
            borderColor="coolGray.200"
            pl="4"
            pr="5"
            py="2"
          >
            <HStack space={3} justifyContent="space-between">
              <Avatar
                size="48px"
                source={{
                  uri: item.avatarUrl,
                }}
              />
              <VStack>
                <Text
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  bold
                >
                  {item.fullName}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  {item.recentText}
                </Text>
              </VStack>
              <Spacer />
              <Text
                fontSize="xs"
                _dark={{
                  color: "warmGray.50",
                }}
                color="coolGray.800"
                alignSelf="flex-start"
              >
                {item.timeStamp}
              </Text>
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
      )}
    </Box>
  )
}

export default function App() {
  return (
    <NativeBaseProvider>
      <Center flex="1" >
        <View />
      </Center>
    </NativeBaseProvider>
  );
}

