import React from 'react';
import { Link } from 'react-router-dom';
import CustomerReview from '../CustomHook/CustomHook';
import logo from '../logo/1.jpg';
import ReviewCart from '../ReviewCart/ReviewCart';
import './Home.css'

const Home = () => {
    const [reviews] = CustomerReview() 
    return (
        <div>
            <div className='banner container d-flex align-items-center justify-content-center'>
                <div className='mt-4 '>
                    <h1 className='text-primary fs-1 fw-bold text-center'>EID COLLECTION</h1>
                    <p className='text-gray fs-5 text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Aperiam aspernatur exercitationem, autem laborum expedita minima eius
                        doloremque distinctio soluta modi consequatur,
                        sit recusandae consequuntur laudantium nobis ipsa deleniti vero tenetur?</p>
                    
                    <div className='d-flex justify-content-center mt-5'>
                        <Link to='/review'><button className='btn btn-primary'>Click Here</button></Link>
                    </div>
                   
                </div>
                <img className='img-fluid  ' src={logo} alt="" />
            </div>

            <h2 className='text-primary py-4 text-center'>Customer Review</h2>
           
            <div className='row d-flex'>
            
                 {
                    reviews.slice(3).map(review => <ReviewCart key={review.id} review={review}></ReviewCart> ) 
               }
                
            </div>
                <div className='d-flex justify-content-center'>
                     <Link to='/review'><button className='btn btn-primary'>see all review</button></Link>
                </div>
            
        </div>
    );
};

export default Home;