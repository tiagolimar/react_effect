export const Card = (props) => {
  const round = props.round ? props.round : 3;

  return (
    <div className="col">
      <div className="card h-100">
        <img src={props.url} className="card-img-top" alt="profile image" />
        <div className="card-body">
          <h5 className="card-title">{`Card Nº ${props.title}`}</h5>
          <p className="card-text">{props.text}</p>
        </div>
      </div>
    </div>
  );
};
