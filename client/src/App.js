import "./App.css";

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 offset-md-3">
          <div className="card bg-dark">
            <div className="card-body">
              <span className="float-right badge badge-success">1/3</span>
              <h4 className="text-success">Where Myanmar</h4>
              <ul className="list-group mt-4">
                <li className="list-group-item p-2 mt-2">
                  <span className="btn btn-sm btn-dark">1</span>
                  <span>Asia</span>
                </li>
                <li className="list-group-item p-2 mt-2 bg-danger">
                  <span className="btn btn-sm btn-dark">1</span>
                  <span>Europ</span>
                </li>
              </ul>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <button className="btn btn-success">Next</button>
                <span className="text-danger">Wrong Answer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
