import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <Container className="mt-4 text-center">
      <h1>Welcome to FakeStore</h1>
      <p>Discover amazing products at great prices!</p>
      <Button variant="primary" onClick={() => navigate('/products')}>
        View Products
      </Button>
    </Container>
  );
}

export default Home;
