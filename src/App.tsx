import { useRef } from 'react';
import Button from './components/Button';
import Container from './components/Container';
import Input from './components/Input';
import Form, { type FormHandle } from './components/Form';

function App() {
	const customForm = useRef<FormHandle>(null);
	// const input = useRef<HTMLInputElement>(null);

	const handleSave = (data: unknown) => {
		const extractedData = data as { name: string; age: string };
		customForm.current?.clear();
	};

	return (
		<main>
			<Form onSave={handleSave} ref={customForm}>
				<Input id="name" label="Your name" type="text" />
				<Input id="age" label="Your age" type="number" />
				<p>
					<Button>Save</Button>
				</p>
			</Form>

			{/* 
			<p>
				<Button href="https://google.com">Link</Button>
			</p>
			<Container as={Button} onClick={() => {}} type="button">
				Click me
			</Container> 
			*/}
		</main>
	);
}

export default App;
