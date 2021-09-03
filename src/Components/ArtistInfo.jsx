import React, { useState, useEffect } from "react";
import { Table, Container, Row, Col } from "react-bootstrap";

function ArtistInfo(props) {
  const [artist, setArtist] = useState("");
  const [isLoading, setLoading] = useState(true);
  const getArtistInfo = async () => {
    try {
      let fetchedArtist = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/artist/` +
          props.match.params.id,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "99c771168cmshdc17cf126cd5d20p12d7a9jsn2e2a4d1814b9",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
          }
        }
      );
      if (fetchedArtist.ok) {
        let resp = await fetchedArtist.json();
        setArtist(resp);
        setLoading(false);
      }
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    getArtistInfo();
  }, []);
  useEffect(() => {
    if (props.match.params.id !== undefined) {
      getArtistInfo();
    }
  }, [props.match.params.id]);
  return (
    <Container>
      <Row>
        {artist && (
          <Col xs={6}>
            <div className={"card big-playlist"}>
              <img
                src={artist.picture_big}
                className={"card-img-top big-playlist-img"}
                alt="..."
              />
              <div className={"card-body big-card-body"}>
                <h5 className={"big-playlist-title"}>{artist.name}</h5>
                <span className={"big-playlist-name"}>
                  Followers: {artist.nb_fan}
                </span>
                <br />
                <span className={"big-playlist-name"}>
                  Number of Albums: {artist.nb_album}
                </span>
              </div>
            </div>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default ArtistInfo;
