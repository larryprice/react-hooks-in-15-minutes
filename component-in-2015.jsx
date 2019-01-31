var ReferralCodeEntry = React.createClass({
  onSave: function(code) {
    this.props.onUpdate(code);
    this.setState({code: code});
  },
  getInitialState: function() {
    return {
      code: this.props.code
    };
  },
  render: function() {
    if (this.state.code && this.state.code.ID !== "") {
      return (
        <EditButton code={this.state.code} saved={this.onSave}
            serviceId={this.props.serviceId} />
      );
    } else {
      return (
        <AddButton saved={this.onSave} serviceId={this.props.serviceId} />
      );
    }
  }
});
