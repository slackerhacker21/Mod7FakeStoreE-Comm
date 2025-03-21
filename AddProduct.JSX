import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

function AddProduct() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: '', price: '', description: '', category: '' });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://fakestoreapi.com/products', formData);
      setSuccess(true);
      setTimeout(() => navigate('/products'), 2000);
    } catch (err) {
      setError('Failed to add product');
    }
  };

  return (
    <Container className="mt-4">
      <h2>Add Product</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">Product added successfully!</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" name="title" value={formData.title} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" name="price" value={formData.price} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" name="description" value={formData.description} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" name="category" value={formData.category} onChange={handleChange} required />
        </Form.Group>
        <Button type="submit" variant="primary">Add Product</Button>
      </Form>
    </Container>
  );
}

export default AddProduct;
