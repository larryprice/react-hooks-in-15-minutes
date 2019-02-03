const messages = ['Really?', 'Don\'t leave me!', 'OK, fine!'];
class CancelAccountDeletion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: 'Cancel',
      clicks: 0,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.clicks !== this.state.clicks) {
      if (this.state.clicks < messages.length) {
        return this.setState((prevState) => ({
          buttonText: messages[prevState.clicks],
        }));
      }

      return this.props.onClick();
    }
  }

  render() {
    return (
      <button className="btn btn-default btn-lg cancel-account-deletion"
          onClick={() => this.setState((prevState) => ({
            clicks: prevState.clicks + 1,
          }))}>
        <span className="glyphicon glyphicon glyphicon-ban-circle"></span>
        {this.state.buttonText}
      </button>
    );
  }
}
