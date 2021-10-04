import React from 'react';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Content(){
    return(
      <>
        <div className="p-5 mb-4 bg-light rounded-3 border">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">First Paragraph in Jumbotron</h1>
            <p className="col-md-8 fs-4">
                Using a series of utilities, you can create this jumbotron, just like  
                the one in the previous version of bootstrap. Check out the examples below for how you can remix and
                restyle it to your liking.
            </p>
            <button className="btn btn-primary btn-lg" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Click here to show Modal box
            </button>
          </div>
        </div>

        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                This is my first modal box
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default Content;