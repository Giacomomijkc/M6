import React from 'react';
import NavigationBar from '../components/NavigationBar';
import AllAuthorsList from '../components/AllAuthorsList';

const AllAuthorsPage = ({authors}) => {

    return(
        <>
        <NavigationBar showSearch={false} />
        <AllAuthorsList authors={authors} />
        </>
    )
}

export default AllAuthorsPage;