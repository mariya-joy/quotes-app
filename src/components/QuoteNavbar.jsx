import React from 'react'
import { Link } from 'react-router-dom'

const QuoteNavbar = () => {
  return (
    <div>
         <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Quote App</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Add Quote</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/search">Search Quote</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/delete">Delete Quote</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/view">View All Quotes</Link>
              </li>
            </ul> 
          </div>
        </div>
      </nav>
    </div>
  )
}

export default QuoteNavbar