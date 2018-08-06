import React, {Component} from 'react'

class Book extends Component {

    state = {
        editable: false,
        book: this.props.book
    }

    

    buttonClickHandler = (event) => {
        event.preventDefault()
        this.setState({
            editable: true
        })
    }

    backButtonHandler = (event) => {
        event.preventDefault()
        this.setState({
                editable: false
        })
        
    }

    editDataHandler = (event) => {
        event.preventDefault()

        this.setState({
            editable: false
        })

        this.props.updatedBookInfo(this.state.book)
    }

    nameDataUpdateHandler = (event) => {
        this.setState({
            ...this.state,
            book: {
                ...this.state.book,
                name: event.target.value
            }
        })

    }

    descriptionDataUpdateHandler = (event) => {
        this.setState({
            ...this.state,
            book: {
               ...this.state.book,
               description: event.target.value
            }
        })
    }

   priceDataUpdateHandler = (event) => {
       this.setState({
           ...this.state,
           book: {
               ...this.state.book,
               price: event.target.value
           }
       })
   }


    deletedBook = (event) => {
        this.props.deleteBookHandler(event, this.state.book.id )
    }

    render() {

       
        let outputData = null
        
        if (this.state.editable) {
            
            outputData =

            <div>
                <form>
                    <div className="group">      
                        <input type="text" required 
                        onChange={this.nameDataUpdateHandler}
                        value={this.state.book.name} />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Name</label>
                    </div>
        
                    <div className="group">      
                        <input type="text" required 
                        onChange={this.descriptionDataUpdateHandler}
                        value={this.state.book.description} />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Description</label>
                    </div>

                    <div className="group">      
                        <input type="number" required 
                        onChange={this.priceDataUpdateHandler}
                        value={this.state.book.price} />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Price</label>
                    </div>
                    <div className="">
                    <button onClick={this.editDataHandler} className="btn btn-success btn-block btn-mb submit-btn">Save</button>
                    <button onClick={this.backButtonHandler} className="btn btn-secondary btn-block btn-mb submit-btn">back</button>
                    </div>
                </form>

            </div>
           
        } else {

            outputData = 

            <div>
                <div>
                    <h5 className="header">
                    {this.state.book.name}</h5>
                    <hr />
                    <div className="description">{this.state.book.description}</div>
                    <hr />
                    <h4 className="price-box"><span className="currency">$</span>{this.state.book.price}</h4>
                    <div className="extra content card-footer">
                    <span>
                    <button onClick={this.buttonClickHandler} type="button" className="btn btn-info btn-block btn-mb edit-btn"> Edit <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M2 12.88V16h3.12L14 7.12 10.88 4 2 12.88zm14.76-8.51c.33-.33.33-.85 0-1.18l-1.95-1.95c-.33-.33-.85-.33-1.18 0L12 2.88 15.12 6l1.64-1.63z"/></svg></button>
                    <button onClick={this.deletedBook} type="button" className="btn btn-danger btn-block btn-mb delete-btn "> Delete <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg></button>
                    </span>
                
                    </div>
                </div>   
            </div>
            
        }

    return (
        <div className="row">
            <div className="ui link cards card mr-4 mt-4">
            <div className="image">
            <img src="http://wikiwebpedia.com/wp-content/uploads/javascript.gif" alt="JavaScript"/>
            </div>
                <div className="content">
                    {outputData}
                </div>
            </div>
        </div>

    )
  }
    
}

export default Book