import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function Profile() {
  const [profile, setProfile] = useState([]);
  const { userId } = useParams();

  const getDetail = () => { 
    axios
      .get(`https://api.github.com/users/${userId}`)
      .then((response) => setProfile(response.data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getDetail();
  }, [userId]);

  return (
    <div className="App">
      <div className="title">
        <h1>Profile</h1> 
      </div>
      <div className="users">
        <img className="float-left rounded avatar" src={profile.avatar_url} alt={profile.name}/>
        <div className="d-inline-block">
            <div>Name:  <span className="name">{profile.name}</span></div> 
            <div>Username: <span className="name">@{profile.login}</span></div>
            <div>Email: <span className="name">{profile.email}</span></div>
            <div>Location: <span className="name">{profile.location}</span></div>
            <div>Bio: <span className="name">{profile.bio}</span></div>
            <div>Blog: <span className="name">{profile.blog}</span></div>
        </div>
      </div>
      <Link to="/">Back</Link>
    </div>
  );
}

export default Profile;
