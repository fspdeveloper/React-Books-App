import React, { Component } from 'react';
import './App.css'; 

import Books from './books/Books.jsx'

class App extends Component {

  state = {
   
    books: [
      {
        name: 'A Smarter Way to Learn JavaScript: Learn it faster',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.',
        price: 20,
        id: 1
      },

      {
        name: 'The Complete Software Developers Career Guide',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
        price: 80,
        id: 2
      },

      {
        name: 'A Smarter Way to Learn Python: Learn it faster',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque ',
        price: 100,
        id: 3
      },
      
  ]

}


  titleFieldHandler = (event) => {
    this.setState({
      name: event.target.value,
    })
  }

  priceFieldHandler = (event) => {
    this.setState({
      price: event.target.value,
    })
  }

  descriptionFieldChange = (event) => {
    this.setState({
      description: event.target.value,
    })
  }


  newBookAddHandler = (event) => {
    event.preventDefault();

    var newBook = {

      id: Date.now(),

      name: this.state.name,
      description: this.state.description,
      price: this.state.price,

    };

    if (newBook.name && newBook.description && newBook.price) {
      this.setState((prevState) => ({
      books: prevState.books.concat(newBook),
      name: "",
      description: "",
      price: ""
    }));
    
      
    } else {
      return (
        alert('You Must to Fill Up The All Field ')
      )
    }

  }

  deleteBookHandler = (id) => {
    let itemIndex = this.state.books.findIndex((book) => {
      return book.id === id
    })

    let books = [...this.state.books]
      books.splice(itemIndex,1)

    this.setState({
      books
    })

  }

  updatedBookData = (updatedBook) => {
    console.log(updatedBook)
    
    this.setState({
      ...this.state.books,
      updatedBook
    })
  }



  render(){

    return (
      <div>
        <div className="container py-5">
          <div className="row">
            <div className="col-11 offset-1">
              <h1 className="display-4 mb-2 text-center ">React Simple Books List</h1>
              <hr/>
      
              <div className="row">
                <div className="col-sm-8 offset-2">
                  {/* <!-- Button trigger modal --> */}
                  <button type="button" className="btn btn-primary btn-mb submit-btn btn-lg btn-block mt-3" data-toggle="modal" data-target="#exampleModal">Create a New Book</button>
                </div>
              </div>

              <hr />
    
                <Books
                books={ this.state.books }
                updatedBookData={this.updatedBookData}
                deleteBookHandler={this.deleteBookHandler.bind(this) }>
                </Books>

            </div>
          </div>
        </div>

        {/* <!-- Modal --> */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Create a New Book</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">

              <form>

              <div className="group">
                <input onChange={this.titleFieldHandler} type="text" required/>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Name</label> 
              </div>

                <div className="group">
                  <input onChange={this.priceFieldHandler} type="number" required/>
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Price</label> 
                </div>

                <div className="group">
                  <input onChange={this.descriptionFieldChange} type="text" required/>
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Description</label> 
                </div>

                <button onClick={this.newBookAddHandler.bind(this)} data-dismiss="modal" className="btn btn-primary btn-block btn-mb submit-btn mt-4 float-right">Submit</button>

                </form>
              </div>
            </div>
          </div>
        </div>
     </div>
    )
  }
 
}

export default App;
