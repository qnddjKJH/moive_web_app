import React from "react";
import axios from "axios";
import Movie from "./Movie";
import './App.css';

// React.Component 는 return 을 가지고 있지 않다
// render Method 가 존재
// state 를 직접적으로 변경해서는 안된다.
// this.state 에 너무 의존하지 말자 current => () 처럼 function 형식을 지원한다.
class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const { 
      data: { 
        data: { movies } 
      } 
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies: movies, isLoading: false });
  }

  // 이론적으로 componentDidMount 에서 data를 fetch 한다
  componentDidMount() {
    this.getMovies();
  }
 
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        { isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div> ) 
          : ( 
            <div className="movies">
              {movies.map(movie => (      
              < Movie 
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image} 
                genres={movie.genres}
              />
              ))}
            </div>
          )}
      </section>
    );
  }
}

export default App;
