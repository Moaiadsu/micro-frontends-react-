import React from "react";
import MainScreen from "remoteLogin/MainScreen";
import { Link } from "react-router-dom";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import data from "./Data";
const MyNotes = () => {
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
      {data.map((note) => (
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
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
