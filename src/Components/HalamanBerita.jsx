import React, { Component } from 'react';
import axios from 'axios';
import {Container} from "react-bootstrap";

class HalamanBerita extends Component {
  state = {
    articles: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    
    axios
      .get('https://newsapi.org/v2/top-headlines?country=id&apiKey=dd7f52fe66224f08a9dda92d38a9902a')
      .then(response => {
        this.setState({
          articles: response.data.articles,
          loading: false,
          error: null,
        });
      })
      .catch(error => {
        this.setState({
          articles: [],
          loading: false,
          error: error.message,
        });
      });
  }

  render() {
    const { articles, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        <Container>
        <div className="row">
          {articles.map(article => (
            <div key={article.url} className="col-md-4 mb-4 mt-4">
              <div className="card">
                <img src={article.urlToImage} className="card-img-top" alt="Article" />
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.description}</p>
                  <a href={article.url} className="btn btn-primary">Selengkapnya</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        </Container>
      </div>
    );
  }
}

export default HalamanBerita;
