import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <label>
            Enter 3-Digit Number:
            <input type='text' name='three-digit' onChange={this.props.handleChange} value={this.props.packagedDigit} />
          </label>
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default Button;