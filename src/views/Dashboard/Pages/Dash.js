import React, { useState } from 'react'
import BreadCumb from '../../../component/BreadCumb'
import { useEffect } from 'react'
import Axios from 'axios'

const Dash = () => {
    const [quote, setQuotes] = useState(null)
    useEffect(() => {
        const random = Math.floor((Math.random() * 10) + 1);
        Axios.get('https://type.fit/api/quotes/').then(
            res => {
                setQuotes(res.data[random])
                console.log(res.data[random].text)

            }
        ).catch(error => {
            console.log(error)
        })
    },[])
    return (
        <>
            <div className="container">
                <BreadCumb title={'Your History Of Events'} />


                <div className="card">
                    <div className="card-body">
                        {
                            quote ? <blockquote className="blockquote mb-0">
                                <p>{quote.text}</p>
                                <footer class="blockquote-footer">{quote.author}</footer>
                            </blockquote> : null
                        }
                    </div>
                </div>
                <br/>

                <div className="card-collection">
                    <div className="event-card">
                        <div className="card card-event">
                            <div className="card-header">
                                No Of Events
                            </div>
                            <div class="card-body">
                                <span className="card-text">Completed: 5</span>
                                <p className="card-text">Non Completed: 4</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dash
