import React from "react";
import { withRouter } from "react-router-dom";

function SideBar() {
  return (
    <div className="navbar-left position-fixed">
      <div className="container logo">
        <i className="fab fa-spotify" />
        <span className="spotify-font-logo">
          Spotify<span className="trademark">®</span>
        </span>
      </div>
      <ul className="container nav-col">
        <li className="container">
          <i className="bi bi-house-door" />
          <span className="col-font">Home</span>
        </li>
        <li className="container">
          <i className="bi bi-search" />
          <span className="col-font">Search</span>
        </li>
        <li className="container">
          <i className="bi bi-list" />
          <span className="col-font">Your Library</span>
        </li>
      </ul>
      <div className="container nav-col second-nav-col">
        <div className="container">
          <i className="bi bi-plus-square-fill" />
          <span className="col-font">Create Playlist</span>
        </div>
        <div className="container">
          <i className="bi bi-heart" />
          <span className="col-font">Liked Songs</span>
        </div>
      </div>
      <div className="container">
        <div className="container under-border" />
      </div>
      <div className="container nav-playlist">
        <div className="container playlist-item">
          <span className="nav-playlist-font">Legends Never Die</span>
        </div>
        <div className="container playlist-item">
          <span className="nav-playlist-font">Justice</span>
        </div>
        <div className="container playlist-item">
          <span className="nav-playlist-font">
            Divinely Uninspired To A Hellish Extent
          </span>
        </div>
        <div className="container playlist-item">
          <span className="nav-playlist-font">Hall of Fame</span>
        </div>
        <div className="container playlist-item">
          <span className="nav-playlist-font">Life in Colour</span>
        </div>
        <div className="container playlist-item">
          <span className="nav-playlist-font">After Hours</span>
          <i className="bi bi-people" />
        </div>
        <div className="container playlist-item">
          <span className="nav-playlist-font">The Off-Season</span>
          <i className="bi bi-people" />
        </div>
        <div className="container playlist-item">
          <span className="nav-playlist-font">Bed</span>
        </div>
        <div className="container playlist-item">
          <span className="nav-playlist-font">Good Without</span>
        </div>
        <div className="container playlist-item">
          <span className="nav-playlist-font">SOUR</span>
        </div>
      </div>
    </div>
  );
}

export default withRouter(SideBar);
