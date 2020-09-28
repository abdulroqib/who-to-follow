import React from 'react';
import { Link } from 'react-router-dom';

const User = ({username, name, avatar, index, remove}) => {
    return (
        <div className="row twitter-user">
          <div className="col-auto">
            <img className="float-left rounded-circle avatar" src={avatar} alt={username}/>
            <div className="info">
              <Link to={`/profile/${username}`}>
                <span className="name">{name} </span> 
                <span className="username">@{username}</span>
              </Link>
            </div>
            <button className="delete" onClick={() => remove(index)}>x</button>
          </div>
        </div>
    );
}

export default User;