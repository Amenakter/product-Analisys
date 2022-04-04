import { useEffect, useState } from 'react';

const CustomerReview = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch("fakedata.json")
            .then(res => res.json())
        .then(data => setReviews(data))

    }, [])
    return[reviews]
}
export default CustomerReview