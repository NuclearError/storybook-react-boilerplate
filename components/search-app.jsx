import _ from 'lodash';
import React, {Component} from 'react';

import Term from './term';
import InputField from './input-field';

class SearchApp extends Component {

	constructor(props) {
		super(props);

		this.state = {
			currentTerm: 'Welcome!'
		};

	};

	processData(term) {
    console.log(`The term is: ${term}`);
    this.setState({
      currentTerm: term
    });
    console.log("SearchApp state: ", this.state);
	};

	// InputField has the property 'processInputData' which we can call back
	// to when the input change event fires
	render() {

		// inner function wrapped inside a debounce method (using lodash)
		// - this function won't call until 300ms have elapsed, no matter how many times it is called
		const throttledChangeProcessing = _.debounce( (term) => { this.processData(term), 300 });

		return (
      <section>
        <Term content={this.state.currentTerm} />
				<InputField label={"Type something: "} processInputData={throttledChangeProcessing} />
      </section>
		);
	};
}

export default SearchApp;

          {/* 'processInputData' can be called as often as possible, but will still only run every 300ms because of the throttle wrapper */}
