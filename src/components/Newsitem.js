import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description,imageurl,newsurl ,publishdate} = this.props;
    return (
   <div>
  <div className="card" style={{ width: "18rem", height: "28rem", overflow: "hidden" }}>
    <img src={imageurl} className="card-img-top" alt="..." style={{ height: "10rem", objectFit: "cover" }} />
    <div className="card-body d-flex flex-column">
      <h5 className="card-title" style={{ height: "3rem", overflow: "hidden", textOverflow: "ellipsis" }}>
        {title}...
      </h5>
      <p className="card-text" style={{ height: "6rem", overflow: "hidden", textOverflow: "ellipsis" }}>
        {description}...
      </p>
      <p className="card-text" style={{ fontSize: "0.9rem", color: "#555" }}>
        Publish Date: {publishdate.slice(0, 10)}
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
