import React, {useState} from 'react'
import PropTypes from 'prop-types';
import './scss/Modal.scss';

const filterJoin = (arr, joinVal = ' ') => {
	for (const i in arr){
		if(arr[i] && typeof arr[i] === 'object'){
			arr[i] = arr[i][1] ? arr[i][0] : null;
		}
	}
	return arr.filter(a => a).join(joinVal)
}

const Modal = props => {

	const {
		onChange, 
		onOpen, 
		onClose, 
		noEsc, 
		closeButton, 
		children, 
		className, 
		superModal
	} = props;
	const [active, setActive] = useState(props.);

	const onEsc = evt => {
		const {closeOnEsc = true} = this.props;
		if ((!evt || evt.keyCode === 27)){
			this.props.toggle(false);
		}
	}

	const toggle = (value = !active) => {
		setActive(value)
		if (onChange){
			onChange(value)
		}
		if (value){
			if (!noEsc){
				window.addEventListener('keydown', onEsc)
			}
		}
		else {
			window.removeEventListener('keydown', onEsc);
		}
	}

	if (props.active !== active){
		toggle(props.active);
	}

	return (
		<div 
			className={filterJoin(['modal-container', ['active', active], ['super', superModal], className])}
		>
			<div 
				className="modal-background"
				onClick={() => toggle(false)}
			/>
			<div className="modal-window">
				{
					closeButton 
						? (closeButton === true 
							? <div 
								className="modal-close button" 
								onClick={() => toggle(false)}
							>
								X
							</div> 
							: closeButton) 
						: null
				}
				{children}
			</div>
		</div>
	)
}

Modal.propTypes = {
	active: PropTypes.bool,
	onChange: PropTypes.func, 
	noEsc: PropTypes.bool,
	closeButton: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.bool,
		PropTypes.element
	]), 
	className: PropTypes.string,
	superModal: PropTypes.bool
}

export {Modal};
