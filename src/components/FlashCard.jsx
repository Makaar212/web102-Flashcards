const FlashCard = (props) => {
  return (
    <div className={`flashCard ${props.color}`}>
      <h1>{props.question}</h1>
      <p>{props.answer}</p>
    </div>
  );
};

export default FlashCard;
