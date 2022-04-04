import React from 'react';
import CustomerReview from '../CustomHook/CustomHook';
import ReviewCart from '../ReviewCart/ReviewCart';

const Review = () => {
    const  [reviews] = CustomerReview()
    return (
        <div>
           
            <div className=' row d-flex'>
                
                {
                reviews.map(review => <ReviewCart key={review.id} review={review}></ReviewCart>)
               }
               
            </div>

            
        </div>
    );
};

export default Review;