import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MusicCard(props) {
  const [music, setMusic] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [fetchInput, setFetchInput] = useState(
    `https://deezerdevs-deezer.p.rapidapi.com/search?q=` + props.search
  );

  const getMusic = async () => {
    try {
      let fetchedMusic = await fetch(
        `https://strive-proxy.herokuapp.com/` + fetchInput,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "99c771168cmshdc17cf126cd5d20p12d7a9jsn2e2a4d1814b9",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
          }
        }
      );
      if (fetchedMusic.ok) {
        let resp = await fetchedMusic.json();
        setMusic([...music, ...resp.data]);
        console.log(music);
        setFetchInput(resp.next);
      }
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    getMusic();
  }, []);
  useEffect(() => {
    if (fetchInput !== undefined) {
      getMusic();
      if (fetchInput === undefined) {
        setLoading(false);
      }
    }
  }, [fetchInput]);
  return (
    <Container>
      <Row>
        {music.map((song) => (
          <Col xs={6}>
            <div className={"card big-playlist"}>
              <img
                src={song.album.cover_big}
                className={"card-img-top big-playlist-img"}
                alt="..."
              />
              <div className={"card-body big-card-body"}>
                <h5 className={"big-playlist-title"}>{song.title_short}</h5>
                <span className={"big-playlist-name"}>{song.artist.name}</span>
              </div>
              <Link className={"mb-3"} to={`/album/${song.album.id}`}>
                <Button>View Album Details</Button>
              </Link>
              <Link to={`/artist/${song.artist.id}`}>
                <Button>View Artist Details</Button>
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
