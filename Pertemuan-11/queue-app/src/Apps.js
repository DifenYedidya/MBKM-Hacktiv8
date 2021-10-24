import React, { useState } from "react";
import { Heading, Text, Flex, Button } from "rebass";

import { Input } from "@rebass/forms";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    if (e.target[0].value.length > 0) {
      const todo = e.target[0].value;
      const newTodos = [...todos];
      newTodos.unshift(todo);
      setTodos(newTodos);
      e.target[0].value = null;
    }
  };

  const removeTodo = () => {
    const newTodos = [...todos];
    newTodos.pop();
    setTodos(newTodos);
  };

  return (
    <Flex
      backgroundColor="#fff"
      height="100vh"
      alignItems="center"
      pt="2rem"
      flexDirection="column"
    >
      <Heading fontFamily="Montserrat" color="#000" fontSize="4rem" mb="2rem">
        Simulasi Antrian
      </Heading>
      <hr color="#000" width="500px" />
      <Flex
        as="form"
        mb="2rem"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        onSubmit={(e) => addTodo(e)}
      >
        Masukan Nama
        <Input color="#000" mr="1rem" />
        <hr />
        <Button width="130px" color="#000">
          Antrikan !
        </Button>
      </Flex>
      <Flex>
        <Button width="130px" color="#000" onClick={() => removeTodo()}>
          Majukan !
        </Button>
      </Flex>
      <hr />
      <Flex minWidth="350px">
        {todos.map((todo, i) => (
          <Text color="#000" backgroundColor="#FFA500" fontSize="2rem">
            {todo} ==={">"}
          </Text>
        ))}
      </Flex>
      <hr />
    </Flex>
  );
};

export default App;
