import { useEffect, useRef } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import Spinner from '../spinner';
import './styles.scss';

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_KEY;

const MapInner = ({ center, zoom }) => {
	const ref = useRef();

	useEffect(() => {
		const map = new window.google.maps.Map(ref.current, {
			center,
			zoom,
		});

		new window.google.maps.Marker({
			map,
			position: center
		});
	}, []);

	return <div ref={ref} id="map" />;
};

const render = (status) => {
	if (status === Status.LOADING) return <h3><Spinner /></h3>;
	if (status === Status.FAILURE) return <h3>{status} ...</h3>;
	return null;
};

const Map = ({center, zoom}) => {
	return (
		<>
			<Wrapper apiKey={API_KEY} render={render}>
				<MapInner center={center} zoom={zoom} />
			</Wrapper>
		</>
	);
};

export default Map;
