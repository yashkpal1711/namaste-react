import React, { useState } from "react";

const Profile = (props) => {
  var [count, setCount] = useState(0);

  return (
    <div>
      <h2>Profile Functional Component</h2>
      <p>Name:{props.name}</p>
      {count}

      <br />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        update count
      </button>
    </div>
  );
};

export default Profile;
