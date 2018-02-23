import React from 'react';

import BaseTransition from './BaseTransition';

class BaseAppearTransition extends BaseTransition {

	setTransitionSpec(value){
		if(value === null)
			this.setState({...this.state, transitionConfiguration: value});
		else if(value !== null)
			this.setState({...this.state, transitionConfiguration: {
				...value, 
				progress: this._transitionProgress}
			});
	}
	
}

export default BaseAppearTransition;