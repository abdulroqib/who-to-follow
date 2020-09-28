import React, { useEffect, useState, useContext } from 'react';
import User from './user';
import { UserContext } from './context';
import axios from 'axios';

function Users() {
  const [since, setSince, users, setUsers] = useContext(UserContext);
  const [index, setIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState(false);

  const getUsers = () => {
    if(loading) return;
    setLoading(true);

    axios
      .get(`https://api.github.com/users?since=${since}`)
      .then((response) => {
        const data = response.data;
        const prevUsers = users;
        const newUsers = data.filter((u) => {
          for (var i = 0; i < prevUsers.length; i++){
            if(prevUsers[i].id === u.id){
              return false;
            }
          }
          return true;
        });

        if(index === null){
          setUsers(newUsers.slice(0, 5));
        } else {
          let updateUsers = prevUsers;
          updateUsers[index] = newUsers[newUsers.length - 1];
          setUsers(updateUsers);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }

  const refresh = () => {
    setIndex(null);
    setSince(since + 5);
    setUpdate(true);
  } 
  
  const replace = (i) => {
    setIndex(i);
    setSince(since + 5);
    setUpdate(true);
  }

  useEffect(() => {
    if(update || users.length === 0){
      getUsers();
    }
  }, [since]);

  return (
    <div className="App">
      <div className="title">
        <h1 className="d-inline">Who to follow</h1> 
        <button className="d-inline refresh" onClick={refresh}>{loading ? 'Loading' : 'Refresh'}</button>
      </div>
      <div className="users">
        {users.map((user, i) => (
          <User 
            username={user.login} 
            name={user.login} 
            avatar={user.avatar_url} 
            key={i} 
            index={i} 
            remove={replace} />
        ))}
      </div>
    </div>
  );
}

export default Users;
