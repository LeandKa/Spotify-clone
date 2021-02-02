import React from "react";
import { FaSearch } from "react-icons/fa";
import { Input, Span, Form } from "./style";
import PropTypes from "prop-types";

export default function Search () {
  return (
    <Form>
         <Input type='text' />
         <Span ><FaSearch/></Span>
    </Form>
  );
}

Search.propTypes = {
  area: PropTypes.string
};
