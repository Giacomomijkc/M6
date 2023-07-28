import React from 'react'
import NavigationBar from '../components/NavigationBar'
import CreatePostInput from '../components/CreatePostInput'

export const CreatePostPage = () =>{
    return(
        <>
        <NavigationBar showSearch={false} />
        <CreatePostInput />
        </>
    )
}

export default CreatePostPage;