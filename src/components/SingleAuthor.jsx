import React from 'react';
import Button from 'react-bootstrap/Button';
import './SingleAuthor.css';

const SingleAuthor = ({author}) => {
    return(
            <tr key={author._id}>
                <td>{author._id}</td>
                <td>{author.name}</td>
                <td>{author.surname}</td>
                <td>{author.email}</td>
                <td>{author.dateOfBirth}</td>
                <td>
                    <img className='author-avatar' src={author.avatar} alt={`${author.name} ${author.surname}`} />
                </td>
                <td>
                    <Button variant='success'>Go to Posts</Button>
                </td>
            </tr>
    );
  };

export default SingleAuthor;