/* global React, ApiUtil */

window.BenchForm = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var inputBench = {
      description: e.target[0].value,
      lat: parseFloat(e.target[1].value),
      lng: parseFloat(e.target[2].value),
      seating: parseInt(e.target[3].value)
    };

    ApiUtil.createBench(inputBench);
  },

  render: function () {
    return (
      <div>
        <h2>Add a bench!</h2>
        <form action="" onSubmit={this.handleSubmit}>
          Description: <input id='description' type='text'/><br></br>
          Latitude:    <input id='latitude' type='number' step='0.001'/><br></br>
          Longitude:   <input id='longitude' type='number' step='0.001'/><br></br>
          Seating:     <input id='seating' type='number' step='1'/><br></br>
          <input type='submit' value='Add bench'/>
      </form>
      </div>
    );
  }
});
