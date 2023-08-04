import './styles.scss';

const Wrapper = ({children}) => {
	return (
		<div className="wrapper">
			<div className="wrapper__inner">
				{children}
			</div>
		</div>
	);
};

export default Wrapper;
