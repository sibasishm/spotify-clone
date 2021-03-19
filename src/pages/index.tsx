import React from 'react';
import { Button } from 'components/button';

const Home = (): JSX.Element => {
	return (
		<>
			<h1 className='flex items-center justify-between mb-4 text-6xl font-bold'>
				Hello World!!!
			</h1>
			<Button
				onClick={(): void => {
					window.alert('TypeScript is coool!');
				}}
			>
				Click Me
			</Button>
			<p className='p-2'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
				blanditiis delectus quisquam, quaerat at, reprehenderit ullam ipsum
				aliquid quibusdam consectetur officia esse! Numquam repellat cupiditate
				ut corporis nemo debitis soluta!
			</p>
		</>
	);
};

export default Home;
