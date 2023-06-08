import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const UserCards = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((response) => {
        setUsers(response);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleUserLogin = (id) => {
    navigate(`/users/${id}`);
  };

  const icons = [
    {
      id: 1,
      src: "https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-female-black-6-512.png",
    },
    {
      id: 2,
      src: "https://cdn-icons-png.flaticon.com/512/4128/4128349.png",
    },
    {
      id: 3,
      src: "https://cdn.icon-icons.com/icons2/2643/PNG/512/avatar_female_woman_person_people_white_tone_icon_159360.png",
    },
    {
      id: 4,
      src: "https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png",
    },
    {
      id: 5,
      src: "https://cdn-icons-png.flaticon.com/256/4140/4140054.png",
    },
    {
      id: 6,
      src: "https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png",
    },
    {
      id: 7,
      src: "https://cdn-icons-png.flaticon.com/512/4139/4139981.png",
    },
    {
      id: 8,
      src: "https://cdn-icons-png.flaticon.com/512/4140/4140039.png",
    },
    {
      id: 9,
      src: "https://cdn-icons-png.flaticon.com/512/4139/4139960.png",
    },
    {
      id: 10,
      src: "https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-female-4-512.png",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="background usersSection section ">
        <h2>Users</h2>
        <div className="allUsers ">
          <h1>
            {loading && (
              <p className="loading">Please wait, users are loading..</p>
            )}
          </h1>
          {users.map((user) => {

            const icon = icons.find((icon) => icon.id === user.id);
            return (
              <Card
                key={user.id}
                userName={user.name}
                userEmail={user.email}
                userAddress={user.address.city}
                onClick={() => handleUserLogin(user.id)}
                iconSrc={icon.src}
              />
            );
          })}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default UserCards;
