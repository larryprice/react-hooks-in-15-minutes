class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {canceled: false};
  }
  render() {
    return (
     <div>
      {this.state.canceled ?
       "Successfully performed action." :
       <CancelAccountDeletion onClick={this.setState.bind(this, {canceled: true})} />}
     </div>
    );
  }
}

const domContainer = document.querySelector('#myApp');
ReactDOM.render(React.createElement(Wrapper), domContainer);
