import axios from "axios";
import React, { Component } from "react";
import api_key from "../secrets";

export default class Favourites extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      genre: [],
      currGenre: "All Genre",
      currText: "",
      currPage: 1,
      limit: 4,
    };
  }

  async componentDidMount() {
    let results = JSON.parse(localStorage.getItem("movies"));
    let genreId = {
      28: "Action",
      12: "Adventure",
      16: "Animation",
      35: "Comedy",
      80: "Crime",
      99: "Documentary",
      18: "Drama",
      10751: "Family",
      14: "Fantasy",
      36: "History",
      27: "Horror",
      10402: "Music",
      9648: "Mystery",
      10749: "Romance",
      878: "Sci-Fi",
      10770: "TV",
      53: "Thriller",
      10752: "War",
      37: "Western",
    };
    let genreArr = [];
    results.map((movieObj) => {
      if (!genreArr.includes(genreId[movieObj.genre_ids[0]])) {
        genreArr.push(genreId[movieObj.genre_ids[0]]);
      }
    });
    genreArr.unshift("All Genre");
    this.setState({
      movies: [...results],
      genre: [...genreArr],
    });
  }

  sortByGenre = (genre) => {
    this.setState({
      currGenre: genre,
      currPage: 1,
    });
  };

  handleText = (e) => {
    this.setState({
      currText: e.target.value,
    });
  };

  handleDelete = (id) => {
    let newMovies = this.state.movies.filter((movieObj) => {
      return movieObj.id != id;
    });
    this.setState({
      movies: [...newMovies],
    });
    localStorage.setItem("movies", JSON.stringify(newMovies));
  };

  sortByPopularityAsc = () => {
    let allMovies = this.state.movies.sort((objA, objB) => {
      return objA.popularity - objB.popularity;
    });
    this.setState({
      movies: [...allMovies],
    });
  };

  sortByPopularityDesc = () => {
    let allMovies = this.state.movies.sort((objA, objB) => {
      return objB.popularity - objA.popularity;
    });
    this.setState({
      movies: [...allMovies],
    });
  };

  sortByRatingAsc = () => {
    let allMovies = this.state.movies;
    allMovies.sort((objA, objB) => {
      return objA.vote_average - objB.vote_average;
    });
    this.setState({
      movies: [...allMovies],
      // movies:allMovies
    });
  };

  sortByRatingDesc = () => {
    let allMovies = this.state.movies.sort((objA, objB) => {
      return objB.vote_average - objA.vote_average;
    });
    this.setState({
      movies: [...allMovies],
    });
  };

  handlePageNum = (page) => {
    this.setState({
      currPage: page,
    });
  };

  handlePrev = () => {
    let n = this.state.currPage - 1;
    if (n > 0) {
      this.setState({
        currPage: n,
      });
    }
  };

  handleNext = (nPages) => {
    let n = this.state.currPage + 1;
    if (n <= nPages) {
      this.setState({
        currPage: n,
      });
    }
  };

  render() {
    let genreId = {
      28: "Action",
      12: "Adventure",
      16: "Animation",
      35: "Comedy",
      80: "Crime",
      99: "Documentary",
      18: "Drama",
      10751: "Family",
      14: "Fantasy",
      36: "History",
      27: "Horror",
      10402: "Music",
      9648: "Mystery",
      10749: "Romance",
      878: "Sci-Fi",
      10770: "TV",
      53: "Thriller",
      10752: "War",
      37: "Western",
    };

    let filteredMovies = this.state.movies;

    if (this.state.currText === "") {
      filteredMovies = this.state.movies;
    } else {
      filteredMovies = filteredMovies.filter((movieObj) => {
        let movieName = movieObj.original_title.toLowerCase();
        return movieName.includes(this.state.currText);
      });
    }

    if (this.state.currGenre != "All Genre") {
      filteredMovies = filteredMovies.filter(
        (movieObj) => genreId[movieObj.genre_ids[0]] == this.state.currGenre
      );
    }

    let numOfPages = Math.ceil(filteredMovies.length / this.state.limit);
    let pagesArr = [];
    for (let i = 1; i <= numOfPages; i++) {
      pagesArr.push(i);
    }
    let firstIndex = (this.state.currPage - 1) * this.state.limit;
    let lastIndex = firstIndex + parseInt(this.state.limit);
    filteredMovies = filteredMovies.slice(firstIndex, lastIndex);

    return (
      <>
        <div className="row">
          <div className="col-3 genre-list">
            <ul className="list-group">
              {this.state.genre.map((genre) =>
                this.state.currGenre == genre ? (
                  <li className="list-group-item active" aria-current="true">
                    {genre}
                  </li>
                ) : (
                  <li
                    className="list-group-item "
                    aria-current="true"
                    onClick={() => this.sortByGenre(genre)}
                  >
                    {genre}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="col movies-table">
            <div className="row">
              <input
                type="text"
                className="col-9"
                placeholder="Search"
                value={this.state.currText}
                onChange={this.handleText}
              ></input>
              <input
                type="number"
                className="col"
                value={this.state.limit}
                onChange={(e) => {
                  e.target.value > 0
                    ? this.setState({ limit: e.target.value })
                    : console.log(e.target.value);
                }}
              ></input>
            </div>
            <div className="row ">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col" className="text-center">
                      Title
                    </th>
                    <th></th>
                    <th scope="col">Genre</th>
                    <th scope="col" className="text-center">
                      <i
                        class="fa-solid fa-sort-up"
                        onClick={this.sortByPopularityAsc}
                      ></i>
                      Popularity
                      <i
                        class="fa-solid fa-sort-down"
                        onClick={this.sortByPopularityDesc}
                      ></i>
                    </th>
                    <th scope="col" className="text-center">
                      <i
                        class="fa-solid fa-sort-up"
                        onClick={this.sortByRatingAsc}
                      ></i>
                      Rating
                      <i
                        class="fa-solid fa-sort-down"
                        onClick={this.sortByRatingDesc}
                      ></i>
                    </th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMovies.map((movieObj) => (
                    <tr>
                      <td scope="row" className="text-center">
                        <img
                          src={`https://image.tmdb.org/t/p/original${movieObj.poster_path}`}
                          style={{
                            width: "4rem",
                            boxShadow:
                              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                            borderRadius: "0.5rem",
                          }}
                        />
                      </td>
                      <td>{movieObj.original_title}</td>
                      <td>{genreId[movieObj.genre_ids[0]]}</td>
                      <td className="text-center">
                        {parseFloat(movieObj.popularity).toFixed(1)}
                      </td>
                      <td className="text-center">{movieObj.vote_average}</td>
                      <td>
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => this.handleDelete(movieObj.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" onClick={this.handlePrev}>
                      Previous
                    </a>
                  </li>
                  {pagesArr.map((page) => (
                    <li class="page-item">
                      <a
                        class="page-link"
                        onClick={() => this.handlePageNum(page)}
                      >
                        {page}
                      </a>
                    </li>
                  ))}
                  <li class="page-item">
                    <a
                      class="page-link"
                      onClick={() => this.handleNext(numOfPages)}
                    >
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </>
    );
  }
}
