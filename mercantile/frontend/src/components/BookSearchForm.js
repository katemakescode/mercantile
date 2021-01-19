import React, {useState, useEffect} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";

export default function BookSearchForm() {
  const [query, setQuery] = useState("cats");

  const handleSubmit = () => alert("Search term: " + query);

  // useEffect(() => document.title = "Books About Books");

  return (
      <Form onSubmit={handleSubmit} >
        <InputGroup className="mb-3" >
          <FormControl type="text" placeholder="Find a book" onChange={event => setQuery(event.target.value)} />
          <InputGroup.Append >
            <Button type="submit" variant="primary" >Search</Button >
          </InputGroup.Append >
        </InputGroup >
      </Form >
  );
}