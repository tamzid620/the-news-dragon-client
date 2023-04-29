import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import first from '../../../assets/1.png'
import second from '../../../assets/2.png'
import third from '../../../assets/3.png'

const LeftNav = () => {
    const [ categories , setCategories ] = useState([]);

    useEffect(() => {
        fetch('https://the-news-dragon-server-forced783-gmailcom.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <h4>All Caterogy</h4>
            <div className='ps-5 py-3 bg-light'>
            {
                categories.map(category => <p
                key={category.id}
                >
                    <Link className='text-decoration-none text-secondary fs-5 fw-semibold' to={`/category/${category.id}`}>{category.name}</Link>
                </p>)
            }
            </div>
            <Row xs={1} md={2} lg={1} className="g-4">
            <Col>
            <Card>
              <Card.Img variant="top" src={first} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
            <Col>
            <Card>
              <Card.Img variant="top" src={second} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
            <Col>
            <Card>
              <Card.Img variant="top" src={third} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
      </Row>
        </div>
    );
};

export default LeftNav;