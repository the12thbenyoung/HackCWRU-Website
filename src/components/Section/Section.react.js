import React from 'react';
import Scroll, {Link, Element} from 'react-scroll'
import PropTypes from 'prop-types';

export default class Section extends React.Component {
  render(){
    return(
      <Element name = {this.props.scrollID}>
        bottom text
      </Element>
    );
  }
}

Scroll.propTypes = {
  scrollID: PropTypes.string,
};
