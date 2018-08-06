import React,{Component} from 'react'

import Book from './Book.jsx'

class Books extends Component {

    state={search: ''}

    bookSearchHandler = (event) => {
        this.setState({
            search: event.target.value
        });
    
    }
   

    render(){

        let fliteringBook = this.props.books.filter((book) =>{
            return book.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;  
        });

        
    if (this.props.books.length > 0) {


        return (

            <div>
                <div className="container py-3">
                    <div className="input-group input-group-lg">
                    <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-lg">Search...</span>
                    </div>
                    <input type="text" onChange={this.bookSearchHandler.bind(this)}
                    value={this.state.search} className="form-control" placeholder="Type here..." />
                    </div>
                </div>
                
                <div className="card-deck">
                    {fliteringBook.map((book, index) => {
                        return <Book key={index} book={book}
                        updatedBookInfo={this.props.updatedBookData}
                        deleteBookHandler={this.props.deleteBookHandler} />
                    }) }
                </div>
            </div>
        )
        
        } else {
            return (
                <h1 className="alert alert-danger text-center mt-5">Book Not Found<span role="img"> :( 🧐 😔 ): </span></h1>
            )
        }
    }
    

}

export default Books