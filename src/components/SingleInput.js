import React from "react";
import PropTypes from "prop-types";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";

const SingleInput = props =>
  <Grid item xs={5}>
    <FormControl margin="normal">
      <InputLabel htmlFor={props.name}>{props.title}</InputLabel>
      <Input
        type={props.type}
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        value={props.content}
        onChange={props.onChange}
        inputProps={{
          "aria-label": "Description"
        }}
      />
    </FormControl>
  </Grid>;

SingleInput.propTypes = {
  type: PropTypes.oneOf(["text", "number"]).isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default SingleInput;
