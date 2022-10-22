import React, { Fragment } from "react";
import Input from "./Input";

const InputPasswordToggle = () => {
	return (
		<Fragment>
			<Input
				type={togglePassword ? "text" : "password"}
				name="password"
				placeholder="Enter your password"
				control={control}
			>
				{!togglePassword ? (
					<IconEyeClose onClick={() => setTogglePassword(true)} />
				) : (
					<IconEyeOpen onClick={() => setTogglePassword(false)} />
				)}
			</Input>
		</Fragment>
	);
};

export default InputPasswordToggle;
