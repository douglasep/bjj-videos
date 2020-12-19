import React from "react";
import { Link } from "react-router-dom";
import YouTube from 'react-youtube';

function isEmptyObject(value) {
  return Object.keys(value).length === 0 && value.constructor === Object;
}

const VideoWrapper = React.forwardRef((props, ref) => {
  <div ref={ref} className="hero position-relative d-flex align-items-center justify-content-center" style={{ marginLeft: '20px' }}>
    <YouTube videoId={props.videoId} opts={props.opts} onReady={props.onReady} />

    <div className="overlay bg-dark position-absolute" />
    <h1 className="display-4 position-relative text-white">
    </h1>
  </div>
})

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = { video: {} };

    this.addHtmlEntities = this.addHtmlEntities.bind(this);
  }

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    const url = `/v1/videos/${id}`;

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("A resposta da rede não está ok.");
      })
      .then(response => this.setState({ video: response }))
      .catch(() => this.props.history.push("/videos"));
  }
  addHtmlEntities(str) {
    return String(str)
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
  }

  render() {
    const { video } = this.state;
    const opts = {
      height: window.innerHeight,
      width: window.innerWidth,
      playerVars: {
        autoplay: 1,
        cc_lang_pref: 'pt-BR',
        color: 'blue',
        controls: 0
      }
    }
    let videoId = video?.urlEmbed ? video?.urlEmbed?.split('embed/')[1] : '';
    let videoWrapperProps = { opts: opts, videoId: videoId, video: video, onReady: this._onReady };
    const ref = React.createRef();
    const showVideo = (
      <div className="hero position-relative d-flex align-items-center justify-content-center" style={{ marginLeft: '20px' }}>
      <YouTube videoId={videoId} opts={opts} onReady={this._onReady} />
        <div className="overlay bg-dark position-absolute" />
        <h1 className="display-4 position-relative text-white">
          {video?.name}
        </h1>
      </div>
    )
    const loadingVideo = (
      <div><h5>Carregando Vídeo</h5></div>
    )
    let channel = video.channel;

    return (
      <>
        <div className="">
          {isEmptyObject(video) ? loadingVideo : showVideo}
          <div className="container py-5">
            <div className="row">
              <div className="col-sm-12 col-lg-3">
                <ul className="list-group">
                  <h5 className="mb-2">Canal</h5>
                  {channel}
                </ul>
              </div>
              <div className="col-sm-12 col-lg-7">
                <div

                />
              </div>
              <div className="col-sm-12 col-lg-2">

              </div>
            </div>
            <Link to="/videos" className="btn btn-link">
              Ver Mais Posições
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Video;