import React, { useEffect, useState } from 'react'
import {
    Heading,
    Box,
    Flex,
    Button
  } from 'rebass';
import { useHistory } from "react-router-dom";

export default function Users() {
    const history = useHistory();
    const handleClick = () => history.push('/');
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {

        return(
            <>
                <Flex
                    alignItems='center'
                    justifyContent='center'
                    p={5}
                >                
                    <Box
                        display='inline-block'
                        width={720}
                        p={3}
                        color='black'
                        backgroundColor='whitesmoke'
                    >
                    <Heading>Testing Example</Heading>
                    <hr/>
                    <Button 
                        variant='primary' 
                        mr={3}
                        bg='green'
                        onClick={handleClick}
                    >
                        Back to Home
                    </Button>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                            <th>Sr.NO</th>
                            <th>Name</th>
                            <th>City</th>
                            </tr>
                        </thead>
                        <tbody>
                        
                        <ul>
                            {items.map(item => (
                            <li key={item.id}>
                                {item.id} {item.name} {item.username}
                            </li>
                            ))}
                        </ul>
                        </tbody>
                    </table>
                    </Box>
                </Flex>
            </>
        )
    }
}