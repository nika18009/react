import React from "react";
import Navbar from "./Navbar";
import Footer from "../Footer/Footer";

import PictureCard from "./PictureCard";

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Portugal",
      src: "https://static.independent.co.uk/2022/02/11/14/iStock-641043764.jpg",
    },
    {
      id: 2,
      name: "Sri Lanka",
      src: "https://lushpalm.com/wp-content/uploads/2017/08/surfing-sri-lanka-mirissa.jpg",
    },
    {
      id: 5,
      name: "Spain",
      src: "https://www.bestsurfdestinations.com/wp-content/uploads/2020/01/Sopelana-surf-town-in-spain-min-scaled.jpg",
    },
    {
      id: 4,
      name: "Hawaii",
      src: "https://freedomdestinations.co.uk/wp-content/uploads/Diamond-Head-Crater-Honolulu.jpg",
    },
    {
      id: 5,
      name: "Australia",
      src: "https://media.cntraveler.com/photos/5671bdd1a7b05ef403fbaeec/16:9/w_2580,c_limit/Whitehaven-Whitsundays-2-GettyImages.jpg",
    },
    {
      id: 6,
      name: "Mexico",
      src: "https://travelhealthpro.org.uk/media_lib/mlib-uploads/full/mexico-beach.jpg",
    },
    {
      id: 7,
      name: "Bali",
      src: "https://www.goatsontheroad.com/wp-content/uploads/2019/08/best-beaches-in-bali.jpg",
    },
    {
      id: 8,
      name: "Morocco",
      src: "https://www.worldbeachguide.com/photos/taghazout-town-beach.jpg",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="news">
        <h2>Our Destinations</h2>
        <div className="newsSection">
          {destinations.map((destination) => (
            <PictureCard
              key={destination.id}
              pictureTitle={destination.name}
              src={destination.src}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Destinations;
