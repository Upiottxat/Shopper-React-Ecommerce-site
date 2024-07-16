import React from 'react'
import "./NewsLetter.css"
const NewsLetter = () => {
    return (
        <React.Fragment>
            <div className='NewsLetter'>
                <h1>Get Exclusive Offer On Your Email </h1>
                <p>Subscribe to our news letter and stay updated </p>
                <div>
                    <input type='email' placeholder='Your Email id' />
                    <button type='submit'>Subscribe</button>

                </div>
            </div>
        </React.Fragment>
    )
}

export default NewsLetter
