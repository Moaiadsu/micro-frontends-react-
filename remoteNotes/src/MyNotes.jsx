import React, { useEffect, useState } from "react";
import MainScreen from "remoteLogin/MainScreen";
import { Link, useHref } from "react-router-dom";
import { Accordion, Badge, Button } from "react-bootstrap";
import axios from "axios";

const MyNotes = () => {
  const [notes, setNotes] = useState([]);
  const fetechNotes = async () => {
    const token = JSON.parse(localStorage.getItem("userInfo")).token;
    const{data} = await axios.get("/api/notes/getnotes", {
      data: {
        user: JSON.parse(localStorage.getItem("userInfo"))
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    setNotes(data);
  };

  useEffect(() => {
    try {
        fetechNotes();
    } catch (error) {
      console.log(error.response.data.message);
    }
    console.log("notes 1", notes);
  }, []);
  const deletHandler = (id) => {
    if (window.confirm("are you sure!")) {
    }
  };
  return (
    <MainScreen title="welcome to the Notes page">
      <Link to="/createNote">
        <Button style={{ margin: 15 }} size="lg">
          create new Note
        </Button>
      </Link>
      {notes.map((note) => (
        <Accordion key={note._id} defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  frontSize: 18,
                }}
              >
                {note.title}
              </span>
              <div>
                <Button href={`/note/${note._id}`}>Edit</Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => deletHandler(note._id)}
                >
                  Delete
                </Button>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <h4>
                <Badge bg="success">category - {note.category}</Badge>
              </h4>
              <blockquote className="blockquote mb-0">
                <p>{note.content}</p>
                <footer className="blockquote-footer mt-1">
                  Create on - date
                </footer>
              </blockquote>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
    </MainScreen>
  );
};
export default MyNotes;
