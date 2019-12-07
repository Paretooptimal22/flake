const React = require(`react`)

module.exports = props => {
  return(
    <div className="modal fade" id="centralModalLg" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
      aria-hidden="true">

  <div className="modal-dialog modal-lg" role="document">


        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title w-100" id="myModalLabel">Modal title</h4>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            ...
      </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary btn-sm">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  )
}