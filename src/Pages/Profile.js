import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  useEffect(()=>{
    axios
    .get(`https://jsonplaceholder.typicode.com/users/?id=${id}`)
    .then((res) => setUser(res.data[0]))
    .catch((err) => console.error(err))
  })
  
  return (
  <div>
    <h2>profile</h2>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.phone}</Card.Text>
        <Link to={`/users`}>
        <Button variant="primary">Go Back</Button>
        </Link>
        
      </Card.Body>
    </Card>
    </div>

  )};

export default Profile;
