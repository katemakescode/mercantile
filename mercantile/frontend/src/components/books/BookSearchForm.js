import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";

export default function BookSearchForm({onSearch = f => f}) {
  const [queryTerm, setQueryTerm] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();
    onSearch(queryTerm);
  }

  function handleInputChange(event) {
    setQueryTerm(event.target.value);
  }

  return (
      <Form onSubmit={handleFormSubmit} >
        <InputGroup className="mb-3" >
          <FormControl
              type="text" name="queryTermInput" placeholder="Find a book" onChange={handleInputChange}
          />
          <InputGroup.Append >
            <Button type="submit" variant="primary" >Search</Button >
          </InputGroup.Append >
        </InputGroup >
      </Form >
  );
}