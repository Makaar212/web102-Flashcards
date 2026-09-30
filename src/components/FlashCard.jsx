const FlashCard = (props) => {
  return (
    <div>
      <div className={props.color}>
        <h1>{props.question}</h1>
        <p>{props.answer}</p>
      </div>
    </div>
  );
};

export default FlashCard;
