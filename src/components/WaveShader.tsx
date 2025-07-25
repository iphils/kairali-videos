import React from 'react';
import {useCurrentFrame, interpolate} from 'remotion';

export const WaveShader: React.FC<{
	opacity?: number;
	color?: string;
}> = ({opacity = 1, color = '#ffd700'}) => {
	const frame = useCurrentFrame();
	
	// Mathematical wave simulation
	const time = frame * 0.05;
	const waveAmplitude = 30;
	const waveFrequency = 0.02;
	const waveSpeed = 0.1;

	const generateWavePath = (offset: number, amplitude: number) => {
		const points: string[] = [];
		const width = 1080;
		const steps = 50;
		
		for (let i = 0; i <= steps; i++) {
			const x = (i / steps) * width;
			const y = Math.sin(x * waveFrequency + time * waveSpeed + offset) * amplitude;
			points.push(`${x},${540 + y + offset}`);
		}
		
		return `M${points.join(' L')} L1080,1080 L0,1080 Z`;
	};

	const waveOpacity = interpolate(
		Math.sin(time),
		[-1, 1],
		[0.1, 0.3]
	);

	return (
		<svg
			width="1080"
			height="1080"
			style={{
				position: 'absolute',
				top: 0,
				left: 0,
				opacity,
			}}
		>
			<defs>
				<linearGradient id="waveGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
					<stop offset="0%" stopColor={color} stopOpacity="0" />
					<stop offset="50%" stopColor={color} stopOpacity={waveOpacity} />
					<stop offset="100%" stopColor="#daa520" stopOpacity={waveOpacity * 0.5} />
				</linearGradient>
				<linearGradient id="waveGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
					<stop offset="0%" stopColor="#f4e4bc" stopOpacity="0" />
					<stop offset="50%" stopColor={color} stopOpacity={waveOpacity * 0.7} />
					<stop offset="100%" stopColor="#b8860b" stopOpacity={waveOpacity * 0.3} />
				</linearGradient>
			</defs>
			
			<path
				d={generateWavePath(0, waveAmplitude)}
				fill="url(#waveGradient1)"
			/>
			<path
				d={generateWavePath(Math.PI / 2, waveAmplitude * 0.7)}
				fill="url(#waveGradient2)"
			/>
			<path
				d={generateWavePath(Math.PI, waveAmplitude * 0.5)}
				fill="url(#waveGradient1)"
				opacity="0.5"
			/>
		</svg>
	);
};