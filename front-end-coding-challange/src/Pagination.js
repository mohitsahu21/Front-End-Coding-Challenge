
// Show this page when repository state data is empty.

function Pagination(){
    return  (
        <div>
            <button className="btn btn-primary" type="button" disabled>
  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  <span className="visually-hidden">Loading...</span>
</button>
<button className="btn btn-primary" type="button" disabled>
  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>
        </div>
    )
  
}

export default Pagination;