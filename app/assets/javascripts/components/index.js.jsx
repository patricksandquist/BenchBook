window.BenchesIndex = React.createClass({
  _onChange: function () {
    this.setState({ benches: BenchStore.all() });
  },

  getInitialState: function () {
    return { benches: BenchStore.all() };
  },

  componentDidMount: function () {
    // Add a listener and grab the benches
    BenchStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    BenchStore.removeChangeListener(this._onChange);
  },

  render: function () {
    if (this.state.benches.length !== 0) {
      return (
        <ol>
          {this.state.benches.map(function (bench) {
            return <li key={bench.id}>{bench.description} [{bench.seating}]</li>;
          })}
        </ol>
      );
    } else {
      return <ul className="no-benches"></ul>;
    }
  }
});
