import {Composition} from 'remotion';
import {KairaliAd} from './KairaliAd';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="KairaliAd"
				component={KairaliAd}
				durationInFrames={300}
				fps={30}
				width={1080}
				height={1080}
			/>
		</>
	);
};