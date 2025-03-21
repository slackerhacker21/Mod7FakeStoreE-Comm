import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <Col md={4} className="mb-4">
      <Card>
        <Card.Img variant="top" src={product.image} alt={product.title} style={{ height: '200px', objectFit: 'contain' }} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
          <Button as={Link} to={`/products/${product.id}`} variant="primary">
            View Details
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductCard;
