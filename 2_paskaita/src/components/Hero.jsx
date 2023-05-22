import PropTypes from 'prop-types';

function Hero(props) {
    
  return props.title && props.subtitle?(
    <div class="hero">
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
    </div>
  ):(
    <></>
  )
    
  ;
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Hero;