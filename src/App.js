import React, {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import CreatePostPage from './pages/CreatePostPage';
import CreateAuthorPage from './pages/CreateAuthorPage';
import ErrorPage from './pages/ErrorPage';
import AllAuthorsPage from './pages/AllAuthorsPage';
import PostPage from './pages/PostPage';
const apiUrl = 'http://localhost:5050/posts';
const authorsApiUrl = "http://localhost:5050/authors/";
const commentsApiUrl = "http://localhost:5050/comments/";


const App = () => {

  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState('');
  const [authors, setAuthors] = useState([]);
  const [comments, setComments] = useState([]);

  const getPosts = async() => {
    try {
      const data = await fetch(apiUrl);
      const response = await data.json();
      console.log(response)
      setPosts(response.posts);
      console.log(posts)
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPosts();
  },[])

  const getAuthors = async () => {
    try {
      const data = await fetch(authorsApiUrl);
      const response = await data.json();
      console.log(response);
      setAuthors(response.authors);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAuthors();
  },[])

  const getComments = async() => {
    try {
      const data = await fetch(commentsApiUrl);
      const response = await data.json();
      console.log(response);
      setComments(response.comments);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getComments();
  }, []);


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage posts={posts} query={query} setQuery={setQuery} authors={authors}/>} />
        <Route exact path="/create-post" element={<CreatePostPage />} />
        <Route exact path="/create-author" element={<CreateAuthorPage />}/>
        <Route exact path="/authors-page" element={<AllAuthorsPage authors={authors}  />}/>
        <Route exact path="/posts/:postId" element={<PostPage showSearch={false} authors={authors} comments={comments} />}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
