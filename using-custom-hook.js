const useTextByCount = (count, messages, onFinished) => {
  const [text, setText] = useState(messages[0]);

  useEffect(() => {
    if (count < messages.length) {
      return setText(messages[count]);
    }
    return onFinished();
  }, [count]);

  return text;
};

const messages = ['Cancel', 'Really?', 'Don\'t leave me!', 'OK, fine!']
const CancelAccountDeletion = ({onClick}) => {
  const [clicks, setClicks] = useState(0);
  const buttonText = useTextByCount(clicks, messages, onClick);

  return (
    <button onClick={() => setClicks(clicks+1)}
        className="btn btn-default btn-lg cancel-account-deletion">
      <span className="glyphicon glyphicon glyphicon-ban-circle"></span>
      {buttonText}
    </button>
  )
};
