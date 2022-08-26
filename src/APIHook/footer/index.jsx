import React from 'react';
import {Navbar, Container} from 'react-bootstrap'

function Footer(props) {
  return (
    <div>
      <Navbar className="footer" expand="lg" bg="dark" variant="dark">
          <Container fluid>
            <h5 className="text-muted me-auto ms-auto">News <span className="text-warning">Rizhal</span></h5>
          </Container>
        </Navbar>
    </div>
  );
}

export default Footer;