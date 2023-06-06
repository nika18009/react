import React from "react";

import Onelink from "./OneLink";

const Links = () => {
  return (
    <div>
      <Onelink linksource="/" linkName="Main Page" />
      <Onelink linksource="/aboutus" linkName="About Us" />
      <Onelink linksource="/news" linkName="News" />
      <Onelink linksource="/services" linkName="Services" />
      <Onelink linksource="/destinations" linkName="Destinations" />
      <Onelink linksource="/contactus" linkName="Contact Us" />
    </div>
  );
};

export default Links;
