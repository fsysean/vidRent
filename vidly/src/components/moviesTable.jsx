import React, { Component } from "react";
import Like from "./common/like";
import TableHead from "./common/tableHeader";
import TableBody from "./common/tableBody";
class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title"
    },
    {
      path: "genre.name",
      label: "Genre"
    },
    {
      path: "numberInStock",
      label: "Stock"
    },
    {
      path: "dailyRentalRate",
      label: "Rate"
    },
    {
      key: "like",
      content: movie => (
        <Like
          liked={movie.liked}
          onLikeToggle={() => this.props.onLike(movie)}
        />
      )
    },
    {
      key: "delete",
      content: movie => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      )
    }
  ];
  render() {
    const { movies, sortColumn, onSort } = this.props;
    return (
      <table className="table">
        <TableHead
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody data={movies} columns={this.columns} />
      </table>
    );
  }
}

export default MoviesTable;
