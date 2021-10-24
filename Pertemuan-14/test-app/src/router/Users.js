import React, { useEffect, useState } from "react";
import { Heading, Box, Flex, Button } from "rebass";
import { useHistory } from "react-router-dom";

export default function Users() {
  const history = useHistory();
  const handleClick = () => history.push("/");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Flex alignItems="center" justifyContent="center" p={5}>
          <Box
            display="inline-block"
            width={720}
            p={3}
            color="black"
            backgroundColor="whitesmoke"
          >
            <Heading>Testing Example</Heading>
            <hr />
            <Button variant="primary" mr={3} bg="green" onClick={handleClick}>
              Back to Home
            </Button>
            <table>
              <thead>
                <th>ID</th>
                <th mr={5}>Name</th>
                <th>Username</th>
              </thead>
              <tbody>
                {items.map((item, idx) => (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Box>
        </Flex>
      </>
    );
  }
}
