const messages = ['Cancel', 'Really?', 'Don\'t leave me!', 'OK, fine!'];
const CancelAccountDeletion = ({onClick}) => {
  const [clicks, setClicks] = useState(0);
  const [buttonText, setButtonText] = useState();

  useEffect(() => {
    if (clicks < messages.length) {
      return setButtonText(messages[clicks]);
    }
    return onClick();
  }, [clicks]);

  return (
    <button onClick={() => setClicks(clicks+1)}
        className="btn btn-default btn-lg cancel-account-deletion">
      <span className="glyphicon glyphicon glyphicon-ban-circle"></span>
      {buttonText}
    </button>
  )
};
