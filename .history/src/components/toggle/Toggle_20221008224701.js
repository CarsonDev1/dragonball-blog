import React from "react";

const Toggle = (props) => {
	const { on, onClick, ...rest } = props;
	return (
		<label>
			<input
				type="checkbox"
				checked={on}
				className="hidden-input"
				onChange={() => {}}
				onClick={onClick}
			/>
			<div className={`inline-block w-[100px] h-[52px]`}></div>
		</label>
	);
};

export default Toggle;
