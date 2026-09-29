const FlashCard = (props) => {
  return (
    <div>
      <div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default FlashCard;
