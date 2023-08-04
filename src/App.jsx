import { useState, useEffect } from 'react';
import './App.scss';
import Map from './components/map';
import Card from './components/card';
import Profile from './components/profile';
import Avatar from './components/avatar';
import Spinner from './components/spinner';
import Wrapper from './components/wrapper';

const API_URL = import.meta.env.VITE_API_URL;

function App() {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch(`${API_URL}/users?limit=10`)
			.then((res) => res.json())
			.then((res) => {
				console.log(res.users);
				setUsers(res.users);
				setIsLoading(false);
			})
			.catch(console.error);
	}, []);

	const userList = users.map((user) => {
		return (
			<div key={user.id} className="users__item">
				<Card>
					<Profile
						name={`${user.firstName} ${user.lastName}`}
						email={user.email}
						avatar={
							<Avatar
								imageSrc={user.image}
								imageAlt={`${user.firstName}'s avatar`}
								size={100}
							/>
						}
						map={
							<Map center={user.address.coordinates} zoom={12} />
						}
					/>
				</Card>
			</div>
		);
	});

	return (
		<Wrapper>
			{isLoading ? (
				<Spinner />
			) : (
				<div className="users">
					<div className="users__items">{userList && userList}</div>
				</div>
			)}
		</Wrapper>
	);
}

export default App;
