import React from 'react'
import NavigationBar from '../components/NavigationBar'
import CreateAuthorInput from '../components/CreateAuthorInput'

export const CreateAuthorPage = () =>{
    return(
        <>
        <NavigationBar showSearch={false} />
        <CreateAuthorInput />
        </>
    )
}

export default CreateAuthorPage;