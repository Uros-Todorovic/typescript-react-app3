import { type ReactNode, type ElementType, type ComponentPropsWithRef } from 'react';

type ContainerProps<T extends ElementType> = {
	as: T;
	children: ReactNode;
} & ComponentPropsWithRef<T>;

const Container = <C extends ElementType>({ as, children, ...props }: ContainerProps<C>) => {
	const Component = as;
	return <Component {...props}>{children}</Component>;
};

export default Container;
