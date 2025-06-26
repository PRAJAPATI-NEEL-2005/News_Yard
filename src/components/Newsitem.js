import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description,imageurl,newsurl ,publishdate ,source} = this.props;
    return (
   <div>
    
  <div className="card" style={{ width: "18rem", height: "28rem", overflow: "" }}>
 <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-primary"
      style={{zIndex : '1'}}>
     {source}
  
</span>

    <img src={imageurl} className="card-img-top" alt="..." style={{ height: "10rem", objectFit: "cover" }} />
    <div className="card-body d-flex flex-column">
      <h5 className="card-title" style={{ height: "3rem", overflow: "hidden", textOverflow: "ellipsis" }}>
        {title}...
      </h5>
      <p className="card-text" style={{ height: "6rem", overflow: "hidden", textOverflow: "ellipsis" }}>
        {description}...
      </p>
      <p className="card-text" style={{ fontSize: "0.9rem", color: "#555" }}> <small className="text-muted">
        Publish Date: {publishdate.slice(0, 10)}</small>
      </p>
      <div className="mt-auto">
        <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  </div>
</div>

    );
  }
}

export default Newsitem;
