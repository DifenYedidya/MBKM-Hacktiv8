import * as React from 'react';
import {
  NativeBaseProvider,
  Box,
  HStack,
  VStack,
  Text,
  Pressable,
  Image,
  StatusBar
} from 'native-base'

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar />
      <Box
        bg="primary.600"
        py={4}
        px={3}
        rounded="md"
        alignSelf="center"
        width={375}
        maxWidth="100%"
      >
        <HStack justifyContent="space-between">
          <Box justifyContent="space-between">
            <VStack space={2}>
              <Text fontSize="sm" color="white">
                Today @ 9PM
              </Text>
              <Text color="white" fontSize="lg">
                Let's talk about Hacktiv8!
              </Text>
            </VStack>
            <Pressable
              rounded="sm"
              bg="primary.400"
              alignSelf="flex-start"
              py={2}
              px={3}
            >
              <Text
                textTransform="uppercase"
                fontSize={'sm'}
                fontWeight="bold"
                color="white"
              >
                Remind me
              </Text>
            </Pressable>
          </Box>
          <Image
            source={{
              uri: 'https://blog.hacktiv8.com/content/images/2018/01/AppIcon.jpg',
            }}
            alt="Hacktiv8"
            height={100}
            rounded="full"
            width={100}
          />
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
}


