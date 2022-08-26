import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Button, Card, Form } from 'react-bootstrap'

function Body() {


  const API_KEY = "89f8f1d170d3d3ba82055e8f607f0352";

  const [newsDetails, setNewsDetails] = useState([])
  const [newsType, setNewsType] = useState('Breaking News')
  const [search, setSearch] = useState('')


  useEffect(() => {
    axios
      .get(`https://gnews.io/api/v4/top-headlines?token=${API_KEY}`)
      .then(res => { setNewsDetails(res.data.articles) })
      .catch(err => { console.log(err) })
  }, [])


  const handleClick = (berita) => {
    setNewsType(berita)
  }

  useEffect(() => {
    axios
      .get(`https://gnews.io/api/v4/top-headlines?topic=${newsType}&token=${API_KEY}`)
      .then(res => { setNewsDetails(res.data.articles) })
      .catch(err => { console.log(err) })
  }, [newsType])


  const handleSearch = (input) => {
    setSearch(input)
    setNewsType(input)
  }

  useEffect(() => {
    axios
      .get(`https://gnews.io/api/v4/search?q=${search}&token=${API_KEY}`)
      .then(res => { setNewsDetails(res.data.articles) })
      .catch(err => { console.log(err) })
  }, [search])

  return (
    <div>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand className="navbar-brand" href="#">News <span className="text-warning">Rizhal</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <Nav.Link
                href=""
                onClick={() => { handleClick('business') }}>
                Business
              </Nav.Link>

              <Nav.Link
                href=""
                onClick={() => { handleClick('sports') }}>
                Sport
              </Nav.Link>

              <Nav.Link
                href=""
                onClick={() => { handleClick('entertainment') }}>
                Entertainment
              </Nav.Link>

              <Nav.Link
                href=""
                onClick={() => { handleClick('technology') }}>
                Technology
              </Nav.Link>

              <Nav.Link
                href=""
                onClick={() => { handleClick('nation') }}>
                National
              </Nav.Link>

              <Nav.Link
                href=""
                onClick={() => { handleClick('world') }}>
                World
              </Nav.Link>

              <Nav.Link
                href=""
                onClick={() => { handleClick('science') }}>
                Science
              </Nav.Link>

              <Nav.Link
                href=""
                onClick={() => { handleClick('health') }}>
                Health
              </Nav.Link>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid="md">
        <Form className="d-flex" action="" onSubmit={(e) => { handleSearch(e.target.value) }}>
          <Form.Group className="my-2">
            <Form.Label> Cari Berita </Form.Label>
            <Form.Control
              type="text"
              placeholder="Search news"
              aria-label="Search"
              name="search"
              onChange={(e) => { handleSearch(e.target.value) }}
            >
            </Form.Control>
            <Button variant="warning">Search</Button>
          </Form.Group>
        </Form>
      </Container>

      <Container fluid>
        <div className="TitleBerita">{newsType.charAt(0).toUpperCase() + newsType.slice(1)}</div>
        <main id="content">
          {
            newsDetails.map((item, index) => (
              <Card style={{ width: '20rem' }} key={index}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{item.publishedAt.split("T")[0]}</Card.Subtitle>
                  <Card.Text>
                    {item.description}
                  </Card.Text>
                  <Nav.Link href={item.url} target="_blank" ><Button variant="warning">Read More</Button></Nav.Link>
                </Card.Body>
              </Card>
            ))
          }

        </main>
      </Container>
    </div>
  );
}

export default Body;