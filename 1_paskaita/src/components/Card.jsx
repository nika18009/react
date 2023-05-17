import PropTypes from 'prop-types';

function Card(props) {
  return (
    <div class="card">
      <img src={props.src} alt="" />
      <div>
        <h2>{props.title}</h2>
        <p>
        {props.description}
        </p>
      </div>
    </div>
  );
}

Card.propTypes = {
  src: PropTypes.string,
};
Card.defaultProps = {
  src: 'https://fomantic-ui.com/images/wireframe/white-image.png',
};
export default Card;

{
  /* <div>Hello, {props.name}! How are you?</div> */
}
