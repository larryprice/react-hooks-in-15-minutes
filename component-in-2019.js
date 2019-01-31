class ReferralCodeEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: props.code,
    };
  }

  @bound
  onSave(code) {
    this.props.onUpdate(code);
    this.setState(() => ({code}));
  }

  render() {
    return (this.state.code && this.state.code.ID !== "") ? (
      <EditButton code={this.state.code} saved={this.onSave}
          serviceId={this.props.serviceId} />
    ) : (
      <AddButton saved={this.onSave} serviceId={this.props.serviceId} />
    );
  }
};
