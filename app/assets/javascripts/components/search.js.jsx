/* global ApiUtil, FilterParamsStore, React, Map, BenchesIndex, BenchStore, FilterParams */

window.Search = React.createClass({
  getInitialState: function () {
    return {bounds: {}, minSeating: 0, maxSeating: 10};
  },

  _onChange: function () {
    var paramsArray = FilterParamsStore.getParams();
    this.setState({
      bounds: paramsArray[0],
      minSeating: paramsArray[1],
      maxSeating: paramsArray[2]
    });

    ApiUtil.fetchBenches();
  },

  componentDidMount: function () {
    FilterParamsStore.addChangeListener(this._onChange);
  },

  handleMapClick: function (coords) {
    this.props.history.pushState(null, "benches/new", coords);
  },

  handleListClick: function (e) {
    var id = {id: parseInt(e.target.parentElement.id)};
    this.props.history.pushState(null, "bench/show", id);
  },

  render: function () {
    return (
      <div>
        <Map clickFunction={this.handleMapClick}/>
        <FilterParams minSeats={this.state.minSeating} maxSeats={this.state.maxSeating}/>
        <BenchesIndex clickFunction={this.handleListClick} benches={BenchStore.all()}/>
      </div>
    );
  }
});
