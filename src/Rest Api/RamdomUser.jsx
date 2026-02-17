// Import React and useState hook
import React, { useState } from "react";

const RandomUser = () => {
  // State to store the fetched random user (initially null)
  const [user, setUser] = useState(null);

  // Function to fetch a random user from the API
  const fetchUser = async () => {
    // Fetch data from the API
    const res = await fetch("https://randomuser.me/api/");
    
    // Convert the response to JSON
    const data = await res.json();
    
    // Store the first user from the results array in state
    setUser(data.results[0]);
  };

  return (
    <div>
      {/* Button to trigger fetching a new random user */}
      <button onClick={fetchUser}>Get Random User</button>

      {/* If a user is present, display their info */}
      {user && (
        <div>
          {/* User profile picture */}
          <img src={user.picture.medium} alt="user" />

          {/* User full name */}
          <h3>{user.name.first} {user.name.last}</h3>

          {/* User email */}
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
};

// Export the component so it can be used in other files
export default RandomUser;
