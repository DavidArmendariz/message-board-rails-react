import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import CustomButton from './CustomButton';

const CustomForm = (props) => {
  const { onSubmit } = props;
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const onBodyChange = (event) => {
    setBody(event.target.value);
  };
  const onClick = () => {
    setTitle('');
    setBody('');
    onSubmit({ title, body });
  };
  return (
    <Form>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" value={title} onChange={onTitleChange} />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Body</Form.Label>
        <Form.Control as="textarea" rows={10} value={body} onChange={onBodyChange} />
      </Form.Group>
      <CustomButton onClick={onClick} text="Submit" />
    </Form>
  );
};

export default CustomForm;
