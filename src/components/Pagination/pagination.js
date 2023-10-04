import React from "react";
import "./pagination.css";

function pagination() {
  return (
    <div className="pagination_box">
      <div class="pagination">
        <a href="#">&laquo;</a>
        <a class="active" href="#">
          1
        </a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">...</a>
        <a href="#">10</a>
        <a href="#">&raquo;</a>
      </div>
    </div>
  );
}

export default pagination;
