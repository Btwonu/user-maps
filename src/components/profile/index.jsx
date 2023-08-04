import './styles.scss';

const Profile = ({ name, email, avatar, map }) => {
	return (
		<div className="profile">
			<div className="profile__cols">
				<div className="profile__col">
					<div className="profile__content">
						<div className="profile__head">
							<h3>{name}</h3>
						</div>

						<div className="profile__email">
							<p>{email}</p>
						</div>

						<div className="profile__avatar">{avatar}</div>
					</div>
				</div>

				<div className="profile__col">
					<div className="profile__map">{map}</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
