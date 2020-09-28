import React, { useState, createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = props => {
  const randNumber = Math.floor(Math.random() * 100);
  const [since, setSince] = useState(randNumber);
  const [users, setUsers] = useState([]);

  return (
    <UserContext.Provider value={[since, setSince, users, setUsers]}>
      {props.children}
    </UserContext.Provider>
  );
}