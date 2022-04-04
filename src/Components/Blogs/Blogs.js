import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h3 className='py-4'>1.What is Sementic HTML Tag?</h3>
            <p className='fs-6 fw-bold'>
                A semantic element clearly describes its meaning to both the browser and the developer.
                In HTML, sementic element , which gives the text it wraps around the role of "a top level heading on your page.
                Semantic elements have meaningful names which tells about type of content. For example header, footer, table, … etc.
                HTML5 introduces many semantic elements as mentioned below which make the code easier to write and understand for 
                the developer as well as instructs the browser on how to treat them. <br /><br/>
                Some sementic tags are here:
            </p>
            <li>header</li>
            <li>nav</li>
            <li>article</li>
            <li>aside</li>
            <li>footer</li>
            <li>table</li>

            <div>
            <h3 className='py-4'>2.What is the react context API?</h3>
                <p className='fs-6 fw-bold'>
                    The react context API is a new feature of react new version.
                    This new API solves one major problem–prop drilling. Even if you’re
                    not familiar with the term, if you’ve worked on a React.js app,
                    it has probably happened to you. Prop drilling is the processing of
                    getting data from component A to component Z by passing it through multiple
                    layers of intermediary React components.each element by the props can be avoided. Component will receive props indirectly and you,
                    the React Developer will have to ensure everything works out right.
            </p>
            </div>
            <div>
                <h3 className='py-4'>3.difference between inline , inline-blocks and bloks element?</h3>
                <p className='fs-6 fw-bold'>
                    <strong>Inline element:</strong>
                    The element doesn’t start on a new line and only occupy just the width it requires.
                        You can’t set the width or height.
                </p>
                <p className='fs-6 fw-bold'>
                    <strong>Inline-blocks element:</strong>
                    It’s formatted just like the inline element, where it doesn’t start on a new line. BUT, you can set width and height values.
                </p>
                <p className='fs-6 fw-bold'>
                    <strong>Block-element:</strong>
                    The element will start on a new line and occupy the full width available. And you can set width and height values.
                </p>
            </div>
            
        </div>
    );
};

export default Blogs;