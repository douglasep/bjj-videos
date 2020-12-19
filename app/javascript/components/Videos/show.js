import React from "react"
import PropTypes from "prop-types"
class Video extends React.Component {
  render () {
    return (
      <React.Fragment>
        Url: {this.props.url}
      </React.Fragment>
    );
  }
}

Video.propTypes = {
  url: PropTypes.string
};
export default Video
