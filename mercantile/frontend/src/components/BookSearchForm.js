import React from "react";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";

export default function BookSearchForm() {
  return (
      <InputGroup className="mb-3" >
        <InputGroup.Prepend ><InputGroup.Checkbox /></InputGroup.Prepend >
        <FormControl placeholder="Find a book" />
        <InputGroup.Append >
          <Button variant="primary" onClick={() => alert('Button clicked')}>Search</Button >
        </InputGroup.Append >
      </InputGroup >
  );
}