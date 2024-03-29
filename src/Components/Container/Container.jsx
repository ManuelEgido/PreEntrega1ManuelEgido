import Container from 'react-bootstrap/Container';
import Navbar from '../Components/NavBar/NavBar';

function Container() {
  return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
        </Container>
      </Navbar>
  );
}

export default Container;