import { type ComponentPropsWithoutRef, forwardRef } from 'react';

type InputProps = {
	label: string;
	id: string;
} & ComponentPropsWithoutRef<'input'>;

const Input = forwardRef<HTMLInputElement, InputProps>(({ id, label, ...props }, ref) => {
	return (
		<p>
			<label htmlFor={id}>{label}</label>
			<input id={id} type="text" {...props} ref={ref} name={id} />
		</p>
	);
});

export default Input;
