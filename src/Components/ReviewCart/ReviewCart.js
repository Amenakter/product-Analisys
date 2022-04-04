import React from 'react';
import Card from 'react-bootstrap/Card';

const ReviewCart = (props) => {
    const { name, rating, image,city , review} = props.review;
    return (
        <div className='col-4 py-2'>
            <Card style={{ width: '300px' }}>
                <Card.Img  src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>{city}</Card.Title>
                    <Card.Title><p>Rating :{rating}</p></Card.Title>
                    <Card.Title><p>Comment:{review}</p></Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ReviewCart;