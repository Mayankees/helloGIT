import React, { Component } from "react";
import { movies } from "./getMovies";
import axios from "axios";
import api_key from "../secrets";

export default class List extends Component {
  constructor() {
    super();
    this.state = {
      hover: "",
      parr: [1],
      currPage: 1,
      movies: [],
      favMovId: JSON.parse(localStorage.getItem("favMovId")) || [],
    };
  }

  handleEnter = (id) => {
    this.setState({
      hover: id,
    });
  };

  handleLeave = () => {
    this.setState({
      hover: "",
    });
  };

  changeMovies = async () => {
    // console.log("changeMovies is called");
    let res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${this.state.currPage}`
    );
    this.setState({
      movies: [...res.data.results],
    });
  };

  handleNext = () => {
    let tempArr = [...this.state.parr];
    let n = this.state.currPage + 1;
    // console.log(n);
    n % 5 == 0 ? tempArr.push(n) : console.log(n);
    this.setState(
      {
        parr: [...tempArr],
        currPage: this.state.currPage + 1,
      },
      this.changeMovies
    );
  };

  handlePrev = () => {
    this.state.currPage > 1
      ? this.setState(
          {
            currPage: this.state.currPage - 1,
          },
          this.changeMovies
        )
      : this.setState({
          currPage: 1,
        });
  };

  switchPage = (pageNum) => {
    this.setState(
      {
        currPage: pageNum,
      },
      this.changeMovies
    );
  };

  handleFavourites = (movieObj) => {
    let localStorageMovies = JSON.parse(localStorage.getItem("movies")) || [];
    if (this.state.favMovId.includes(movieObj.id)) {
      localStorageMovies = localStorageMovies.filter(
        (movie) => movie.id != movieObj.id
      );
    } else localStorageMovies.push(movieObj);
    localStorage.setItem("movies", JSON.stringify(localStorageMovies));
    let tempData = localStorageMovies.map((movieObj) => movieObj.id);
    localStorage.setItem("favMovId", JSON.stringify(tempData));
    this.setState({
      favMovId: [...tempData],
    });
  };

  async componentDidMount() {
    let res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${this.state.currPage}`
    );
    this.setState({
      movies: [...res.data.results],
    });
  }

  render() {
    return (
      <>
        {this.state.movies.length == 0 ? (
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div>
            <h3 className="text-center">
              <strong>Trending</strong>
            </h3>
            <div className="movies-list">
              {this.state.movies.map((movieObj) => (
                <div
                  className="card movie-card"
                  onMouseEnter={() => this.handleEnter(movieObj.id)}
                  onMouseLeave={this.handleLeave}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/original${movieObj.poster_path}`}
                    className="card-img-top card-img"
                    alt={movieObj.title}
                    style={{ height: "100%", width: "100%" }}
                  />
                  {/* <div className="card-body"> */}
                  <h5 className="card-title movie-title">
                    {movieObj.original_title}
                  </h5>
                  <h5 className="card-title movie-title">
                    {/* {movieObj.release_date.split("-", 1)} */}
                    {movieObj.release_date}
                  </h5>
                  {/* <p className="card-text banner-text">{movieObj.overview}</p> */}
                  <div className="button-wrapper">
                    {this.state.hover == movieObj.id && (
                      <a
                        onClick={() => this.handleFavourites(movieObj)}
                        className="btn btn-primary movie-button"
                      >
                        {this.state.favMovId.includes(movieObj.id)
                          ? "Remove from favourites"
                          : "Add to favourites"}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="pagination">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" onClick={this.handlePrev}>
                      Previous
                    </a>
                  </li>
                  {this.state.parr.map((pageNum) => (
                    <li className="page-item">
                      <a
                        className="page-link"
                        onClick={() => this.switchPage(pageNum)}
                      >
                        {pageNum}
                      </a>
                    </li>
                  ))}
                  <li className="page-item">
                    <a className="page-link" onClick={this.handleNext}>
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </>
    );
  }
}
