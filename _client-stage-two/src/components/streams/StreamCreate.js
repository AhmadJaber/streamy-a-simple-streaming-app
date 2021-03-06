import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  // eslint-disable-next-line class-methods-use-this
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }

    return <div />;
  }

  // eslint-disable-next-line class-methods-use-this
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="on" />
        {this.renderError(meta)}
      </div>
    );
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />

        <button className="ui button primary" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

const validate = formValues => {
  const error = {};

  if (!formValues.title) {
    error.title = 'You must enter a title!';
  }
  if (!formValues.description) {
    error.description = 'You must enter description!';
  }

  return error;
};

const formWrapped = reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);

export default connect(
  null,
  {
    createStream
  }
)(formWrapped);
