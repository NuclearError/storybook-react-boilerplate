import React, {Component} from 'react';
import PropTypes from 'prop-types';

class InputField extends Component {

	constructor(props) {
		super(props);

		this.state = {
			term: ''
		};
	};

	render() {
		return(
      <div className="search__input">
        <label>{this.props.label}</label>
				<input
					value = {this.state.term}
					onChange={ event => this.onInputChange(event.target.value) }
				/>
      </div>
		);
	};

	onInputChange(term){
		this.setState({term});
		this.props.processInputData(term);
	};
}

InputField.defaultProps = {
	label: 'Input:' // this default value will be used if the parent doesn't pass it a value
}

InputField.propTypes = {
  label: PropTypes.string // not required, therefore we must give it a default value
};

export default InputField;
