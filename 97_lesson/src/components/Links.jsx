import React from "react";

import SingleLink from "./SingleLink";

const Links = () => {
  return (
    <div>
      <SingleLink linksource="/" linkName="Main Page" />
      <SingleLink linksource="/users" linkName="Users" />
    </div>
  );
};

export default Links;
