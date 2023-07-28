import React from 'react'
import NavigationBar from '../components/NavigationBar';
import AllPosts from '../components/AllPosts';

export const Homepage = ({ posts, query, setQuery, authors }) => {
  return (
    <>
        <NavigationBar query ={query} setQuery={setQuery} showSearch={true}/>
        <AllPosts posts = {posts} query ={query} authors={authors} />
    </>
  )
}

export default Homepage;