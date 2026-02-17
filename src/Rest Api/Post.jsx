// Import React and necessary hooks
import React, { useEffect, useState } from "react";

const Posts = () => {
  // State to store the list of posts fetched from the API
  const [posts, setPosts] = useState([]);

  // useEffect runs once after the component mounts
  useEffect(() => {
    // Fetch the first 10 posts from the API
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => res.json()) // Convert the response to JSON
      .then((data) => setPosts(data)); // Store the fetched posts in 'posts' state
  }, []); // Empty array = run only once

  return (
    <div>
      <h2>Posts</h2>

      {/* Render each post */}
      {posts.map((post) => (
        // Each post is displayed inside a bordered box with spacing
        // key={post.id} is required for React to track list items
        <div
          key={post.id}
          style={{ border: "1px solid black", margin: 10, padding: 10 }}
        >
          {/* Post title */}
          <h3>{post.title}</h3>

          {/* Post body */}
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

// Export the component so it can be imported and used in other files
export default Posts;
