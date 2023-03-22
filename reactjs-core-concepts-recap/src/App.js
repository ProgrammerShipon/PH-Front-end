import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
    </div>
  );
}

function LoadPosts () {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const URL = `https://jsonplaceholder.typicode.com/posts`;
    fetch(URL)
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])

  return (
    <div>
      {
        posts.map(post => <PostItem post={ post } key={ post.id } ></PostItem>)
      }
    </div>
  )
}

const postStyle = {
  backgroundColor: 'lightblue',
  padding: '15px',
  margin: '15px',
  borderRadius: '10px',
  border: '1px solid gray'
}

function PostItem ( props ) {
  const { title, body } = props.post
  return (
    <div style={postStyle}>
      <h2> Title: {title} </h2>
      <p> <strong>Body: </strong> {body} </p>
    </div>
  )
}

export default App;
