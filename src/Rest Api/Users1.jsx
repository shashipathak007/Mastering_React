// Import React and necessary hooks
import React, { useEffect, useState } from "react";

const Users = () => {
  // State to store the list of users fetched from API
  const [users, setUsers] = useState([]);
  
  // State to store the current search input value
  const [search, setSearch] = useState("");

  // useEffect runs once after the component mounts
  useEffect(() => {
    // Fetch user data from the API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json()) // Convert the response to JSON
      .then((data) => setUsers(data)); // Store fetched users in 'users' state
  }, []); // Empty array = run only once

  // Filter users based on search input (case-insensitive)
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>User Search</h2>

      {/* Input field for searching users */}
      <input
        type="text"
        placeholder="Search user..."
        value={search} // Bind input value to 'search' state
        onChange={(e) => setSearch(e.target.value)} // Update 'search' state on typing
      />

      {/* Render the filtered list of users */}
      {filteredUsers.map((user) => (
        // Each user displayed as a paragraph
        // key={user.id} is needed by React to track list items
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

// Export the component so it can be used elsewhere
export default Users;
