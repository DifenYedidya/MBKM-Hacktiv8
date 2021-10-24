import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Input,
  Button,
  IconButton,
  Checkbox,
  Text,
  VStack,
  HStack,
  Heading,
  Icon,
  Center,
  Box,
  NativeBaseProvider,
} from "native-base";
import { FontAwesome5, Feather, Entypo } from "@expo/vector-icons";

const Wishlist = () => {
  const instState = [
    { title: "Baju", isCompleted: true },
    { title: "kaus kaki", isCompleted: false },
    { title: "handphone", isCompleted: false },
    { title: "sendal baru", isCompleted: false },
  ];
  const [list, setList] = React.useState(instState);
  const [inputValue, setInputValue] = React.useState("");

  const addItem = (title) => {
    setList([
      ...list,
      {
        title: title,
        isCompleted: false,
      },
    ]);
  };

  const handleDelete = (index) => {
    const temp = list.filter((_, itemI) => itemI !== index);
    setList(temp);
  };

  const handleStatusChange = (index) => {
    const temp = list.map((item, itemI) =>
      itemI !== index
        ? item
        : {
            ...item,
            isCompleted: !item.isCompleted,
          }
    );
    setList(temp);
  };

  return (
    <NativeBaseProvider>
      <Box p="8" mt="20">
        <Heading mb="4" color="cyan.500" fontSize="3xl">
          Wishlist
        </Heading>
        <VStack space={4}>
          <HStack space={2}>
            <Input
              flex={1}
              onChangeText={(v) => setInputValue(v)}
              value={inputValue}
              placeholder="Item baru"
            />
            <IconButton
              borderRadius="sm"
              variant="solid"
              icon={
                <Icon as={Feather} name="plus" size="sm" color="warmGray.50" />
              }
              onPress={() => {
                addItem(inputValue);
                setInputValue("");
              }}
            />
          </HStack>
          <VStack space={2}>
            {list.map((item, itemI) => (
              <HStack
                w="100%"
                justifyContent="space-between"
                alignItems="center"
                key={item.title + itemI.toString()}
              >
                <Checkbox
                  isChecked={item.isCompleted}
                  onChange={() => handleStatusChange(itemI)}
                  value={item.title}
                >
                  <Text
                    mx="2"
                    strikeThrough={item.isCompleted}
                    _light={{
                      color: item.isCompleted ? "gray.400" : "coolGray.800",
                    }}
                    _dark={{
                      color: item.isCompleted ? "gray.400" : "coolGray.50",
                    }}
                  >
                    {item.title}
                  </Text>
                </Checkbox>
                <IconButton
                  size="sm"
                  colorScheme="trueGray"
                  icon={
                    <Icon
                      as={Entypo}
                      name="minus"
                      size="xs"
                      color="trueGray.400"
                    />
                  }
                  onPress={() => handleDelete(itemI)}
                />
              </HStack>
            ))}
          </VStack>
        </VStack>
      </Box>
      <StatusBar />
    </NativeBaseProvider>
  );
};
export default Wishlist;
