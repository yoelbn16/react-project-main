import { Grid, TextField, Alert } from "@mui/material";
import PropTypes from "prop-types";

const TextContent = ({
  xs,
  id,
  label,
  autoFocus,
  value,
  onChange,
  onBlur,
  errors,
  type,
  required,
}) => {
  return (
    <Grid item xs={xs}>
      <TextField
        name={id}
        required={required}
        fullWidth
        id={id}
        label={label}
        autoFocus={autoFocus}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        error={Boolean(errors)}
      />
      {errors && <Alert severity="error">{errors}</Alert>}
    </Grid>
  );
};

TextContent.propTypes = {
  xs: PropTypes.number,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  errors: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
};

TextContent.defaultProps = {
  xs: 6,
  autoFocus: false,
};

export default TextContent;
