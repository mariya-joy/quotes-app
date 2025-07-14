import React, { useEffect, useState } from 'react'
import QuoteNavbar from './QuoteNavbar'
import axios from 'axios'

const ViewAllquotes = () => {
    const[quote,changeQuote]=useState(
        {"quotes":[],"total":1454,"skip":0,"limit":30}
    )
    const fetchData=()=>{
        axios.get("https://dummyjson.com/quotes").then(
            (response)=>{
                changeQuote(response.data)
            }
        ).catch() 
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
        <QuoteNavbar/>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                        <h2 align="center">All Quotes</h2>
                            {quote.quotes.map(
                                (value, index) => {
                                    return (
                                        <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <div class="card  h-100">
                                                <div class="card-body">
                                                    <h4 class="card-text">{value.id}</h4>
                                                    <p class="card-text">{value.quote}</p>
                                                    <p class="card-text">{value.author}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ViewAllquotes