class CancelAccountDeletion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: 'Cancel',
      clicks: 0,
    }
    this.messages = ['Really?', 'Don\'t leave me!', 'OK, fine!'];
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if (this.state.clicks < this.messages.length) {
      return this.setState((prevState) => ({
        buttonText: messages[prevState.clicks],
        clicks: prevState.clicks + 1,
      }));
    }
    return this.props.onClick();
  }

  render() {
    return (
      <button className="btn btn-default btn-lg cancel-account-deletion" onClick={onClick}>
        <span className="glyphicon glyphicon glyphicon-ban-circle"></span>
        {this.state.buttonText}
      </button>
    );
  }
}
