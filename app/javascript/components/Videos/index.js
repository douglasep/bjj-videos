import React from "react"
import PropTypes from "prop-types"
class Videos extends React.Component {
  goToVideo(videoId) {
      
  }
  render () {
    return (
      <div className="container">
        <h1>Vídeos Disponíveis</h1>
        <div className="row">
            {
              this.props.videos.map(video => (
                <div className="col-lg-4 col-sm-6" key={video.id} onclick="goToVideo(key)">
                  <div className="thumbnail" style={{cursor: 'pointer'}}>
                    <h5>{`${video.name} ${video.duration}`}</h5>
                    <img className="w-100" src={video.thumbnail} />
                  </div>
                </div>
              ))
            }
        </div>

      </div>
    );
  }
}

Videos.propTypes = {
  videos: PropTypes.array
};
export default Videos
