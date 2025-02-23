import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let { title, description,ImgUrl, NeusUrl,author, date } = this.props;
        return (
            <div>
                <div className="card mx- my-2" >
                    <img src={ImgUrl} className="card-img-top" alt="..." style={{height:"250px"}} />
                    <div className="card-body">
                        <h5 className="card-title">{title.slice(0,70)}...</h5>
                        <p className="card-text">{description.slice(0,100)}</p>
                        {/* <p className="card-text"><small>by {author} on {date}</small></p> */}
                        <div className='d-flex justify-content-between'>

                            <a rel="noreferrer" href={NeusUrl} target="_blank" className="btn btn-sm btn-primary">ReadMore</a>
                            
                            <p className="card-text"><small>by {author?author.slice(0,14):"Unknown"} on {(new Date(date).toGMTString()).slice(0,22)}</small></p>
                        </div>
                    </div>
                </div>
{/* 
                <div className="card" style={{width: "18rem"}}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default Newsitem