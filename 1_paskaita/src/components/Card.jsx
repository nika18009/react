import PropTypes from 'prop-types';

function Card(props) {
  return (
    <div class="card">
      <img src={props.src} alt={props.title} />
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
Card.defaultProps = {
  src: 'https://fomantic-ui.com/images/wireframe/white-image.png',
};
export default Card;


