import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaEnvelope, FaPhone, FaGlobe } from "react-icons/fa";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);

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

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((resp) => resp.json())
      .then((response) => {
        setUser(response);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <div>Loading user...</div>;
  }

  const icon = icons.find((icon) => icon.id === user.id);
  console.log(icon);
  return (
    <div className="background ">
      <Navbar />
      <div className=" section">
        <div className="singleUserCard card">
          <img src={icon.src} alt={icon.id} />
          <h2> {user.name}</h2>
          <h3>
            {" "}
            <FaEnvelope size={20} color="#b1aeaa" /> {user.email}
          </h3>
          <h3>
            <FaPhone size={20} color="#b1aeaa" /> {user.phone}
          </h3>
          <h3>
            <FaGlobe size={20} color="#b1aeaa" /> {user.website}
          </h3>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default User;
