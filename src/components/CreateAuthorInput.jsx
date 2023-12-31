import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
const authorApiUrl = "http://localhost:5050/authors/create";
const apiUrlFile = "http://localhost:5050/authors/uploadImg"

const CreateAuthorInput = () => {

    const [formData, setFormData] = useState({});
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        //quando facciamo upload di un input di tipo file il file si trova sempre all'array 0 della proprietà file
        setFile(e.target.files[0]);
    }

        //gestione dell'upload del file
    const uploadFile = async(image) => {
        const fileData = new FormData();
        fileData.append('avatar', image);
    
        try {
            const response = await fetch(apiUrlFile, {
                method: "POST",
                body: fileData,
            });
            return await response.json()
        } catch (error) {
            console.error('File upload errors occured');
        }
    };

    const submitForm = async(e) =>{
        e.preventDefault();

        if(file){
            try {
                const uploadedFile = await uploadFile(file);
                const postFormData = {
                    ...formData,
                    avatar: uploadedFile.avatar,
                };

                const response = await fetch(authorApiUrl, {
                    method: "POST",
                    headers: {
						"Content-Type": "application/json",
					},
                    body: JSON.stringify(postFormData),
                });
               
                if (response.ok) {
                    console.log('sono nel if response ok')
                  }
            
                return response.json();
            } catch (error) {
                console.error('Failed to save Post')
            }
        } else {
            console.error('Please select at least 1 file to upload')
        }
    };


    return (
        <Container className='fluid mt-5 d-flex justify-content-center align-items-center'>
            <Row>
                <Col className='col-md-10'>
                    <Form style={{ width: '30rem'}} encType='multipart/form-data' onSubmit={submitForm}>
                        <Form.Group className="mb-3" controlId="createAuthorForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Your Name" 
                            name="name" 
                            //value={author.name} 
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="createAuthorForm.ControlInput2">
                            <Form.Label>Surname</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Your Surname" 
                            name="surname" 
                            //value={author.surname}
                            onChange={(e) => setFormData({ ...formData, surname: e.target.value })} 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="createAuthorForm.ControlInput3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Your Email" 
                            name="email" 
                            //value={author.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="createPostForm.ControlInput4">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Your Date of Birth with YYYY/MM/DD format" 
                            name="dateOfBirth" 
                            //value={author.dateOfBirth} 
                            onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })} 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="createPostForm.ControlInput5">
                            <Form.Label>Avatar </Form.Label>
                            <Form.Control 
                            type="file" 
                            placeholder="Put the URL of your avatar image" 
                            name="avatar" 
                            //value={author.avatar}
                            onChange={handleFileChange}
                            />
                        </Form.Group>
                        <Button
                        type="submit"
                        variant="success"
                        >Create Author</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );

}

export default CreateAuthorInput;