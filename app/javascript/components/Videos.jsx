import React from "react";
import { Link } from "react-router-dom";

class Videos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    };
  }
  componentDidMount() {
    const url = "/v1/videos/index";
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("A resposta da rede não está ok");
      })
      .then(response => this.setState({ videos: response }))
      .catch(() => this.props.history.push("/"));
    }
    render() {
        const { videos } = this.state;
        const allVideos = videos.map((video, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <Link to={`/video/${video.id}`} className="btn custom-button">
              <div className="card mb-4">
                <img
                  src={video.thumbnail}
                  className="card-img-top"
                  alt={`${video.name} image`}
                />
                <div className="card-body">
                  <h5 className="card-title">{video.name}</h5>
                    Assistir Posição
                </div>
              </div>
            </Link>
          </div>
        ));
        const noVideo = (
          <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
            <h4>
              Infelizmente não encontramos nenhuma posição para você
            </h4>
          </div>
        );
    
        return (
          <>
            <section className="jumbotron jumbotron-fluid text-center">
              <div className="container py-5">
                <h1 className="display-6">Encontramos posições do dia para você!</h1>
                <p className="lead text-muted">
                  Treine essas posições de <span className="blue">
                    {videos.length > 0 ? videos[0].position.type : ''} 
                  </span> hoje mesmo 
                </p>
              </div>
            </section>
            <div className="py-5">
              <main className="container">
                <div className="row">
                  {videos.length > 0 ? allVideos : noVideo}
                </div>
                <Link to="/" className="btn btn-link">
                  Voltar
                </Link>
              </main>
            </div>
          </>
        );
      }
}
export default Videos;