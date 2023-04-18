import React from "react";
import { Form, FormControl, Nav } from "react-bootstrap";

const Search = () => {
  return (
    <Form inline>
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
    </Form>
  );
};

export default Search;
