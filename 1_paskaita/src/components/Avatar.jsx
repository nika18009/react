import PropTypes from 'prop-types';

function Avatar(props) {
  return (
    <div class="avatar">
        <h1>{props.name.split(" ").map((n) => n[0]).join("")}</h1>
    </div>
  );
}

Avatar.propTypes = {
  name: PropTypes.string,
};
Avatar.defaultProps = {
  name: 'Name Surname',
};
export default Avatar;