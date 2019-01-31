const useUpdateButtonTextByClick = (clicks, messages, onFinished) => {
  const [buttonText, setButtonText] = useState(messages[0]);

  useEffect(() => {
    if (clicks < messages.length) {
      return setButtonText(messages[clicks]);
    }
    return onFinished();
  });

  return buttonText;
};

const CancelAccountDeletion = ({onClick}) => {
  const [clicks, setClicks] = useState(0);
  const buttonText = useUpdateButtonTextByClick(
    ['Cancel', 'Really?', 'Don\'t leave me!', 'OK, fine!'],
    onClick);

  return (
    <button onClick={() => setClicks(clicks+1)}
        className="btn btn-default btn-lg cancel-account-deletion">
      <span className="glyphicon glyphicon glyphicon-ban-circle"></span>
      {buttonText}
    </button>
  )
};
