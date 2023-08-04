import './styles.scss';

const Avatar = ({ imageSrc, imageAlt, size }) => {
	return <img src={imageSrc} alt={imageAlt} width={size} height={size} />;
};

export default Avatar;
