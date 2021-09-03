import React, { useState, useEffect } from "react";
import { Table, Container, Row, Col } from "react-bootstrap";

function AlbumInfo(props) {
  const [album, setAlbum] = useState("");
  const [isLoading, setLoading] = useState(true);
  const getAlbumInfo = async () => {
    try {
      let fetchedAlbum = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/album/` +
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
      if (fetchedAlbum.ok) {
        let resp = await fetchedAlbum.json();
        setAlbum(resp);
        setLoading(false);
      }
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    getAlbumInfo();
  }, []);
  useEffect(() => {
    if (props.match.params.id !== undefined) {
      getAlbumInfo();
    }
  }, [props.match.params.id]);
  return (
    <Container>
      <Row>
        {album && (
          <Col xs={6}>
            <div className={"card big-playlist"}>
              <img
                src={album.cover_big}
                className={"card-img-top big-playlist-img"}
                alt="..."
              />
              <div className={"card-body big-card-body"}>
                <h5 className={"big-playlist-title"}>{album.title}</h5>
                <span className={"big-playlist-name"}>{album.artist.name}</span>
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {album.tracks.data.map((track) => (
                      <tr>
                        <td>{album.tracks.data.indexOf(track) + 1}</td>
                        <td>{track.title}</td>
                        <td>
                          {Math.floor(track.duration / 60)}:
                          {track.duration % 60}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default AlbumInfo;
