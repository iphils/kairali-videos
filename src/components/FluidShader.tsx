import React from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';

export const FluidShader: React.FC<{opacity?: number}> = ({opacity = 1}) => {
	const frame = useCurrentFrame();
	const {width, height} = useVideoConfig();

	// Mathematical fluid simulation parameters
	const time = frame * 0.02;
	
	const createFluidPattern = () => {
		const canvas = document.createElement('canvas');
		canvas.width = width;
		canvas.height = height;
		const ctx = canvas.getContext('2d');
		
		if (!ctx) return '';

		// Create gradient for oil-like fluid effect
		const gradient = ctx.createRadialGradient(
			width * 0.3, height * 0.3, 0,
			width * 0.7, height * 0.7, width * 0.8
		);
		
		gradient.addColorStop(0, `rgba(255, 248, 220, ${0.8 * opacity})`);
		gradient.addColorStop(0.3, `rgba(255, 215, 0, ${0.6 * opacity})`);
		gradient.addColorStop(0.6, `rgba(218, 165, 32, ${0.4 * opacity})`);
		gradient.addColorStop(1, `rgba(184, 134, 11, ${0.2 * opacity})`);

		ctx.fillStyle = gradient;
		ctx.fillRect(0, 0, width, height);

		// Add flowing wave patterns
		for (let i = 0; i < 5; i++) {
			const waveGradient = ctx.createLinearGradient(
				0, height * (i / 5),
				width, height * ((i + 1) / 5)
			);
			
			const alpha = Math.sin(time + i * 0.5) * 0.1 + 0.1;
			waveGradient.addColorStop(0, `rgba(255, 248, 220, ${alpha * opacity})`);
			waveGradient.addColorStop(0.5, `rgba(255, 223, 0, ${alpha * 0.8 * opacity})`);
			waveGradient.addColorStop(1, `rgba(255, 248, 220, ${alpha * opacity})`);
			
			ctx.fillStyle = waveGradient;
			ctx.fillRect(0, height * (i / 5), width, height / 5);
		}

		return canvas.toDataURL();
	};

	return (
		<div
			style={{
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				backgroundImage: `url(${createFluidPattern()})`,
				backgroundSize: 'cover',
				mixBlendMode: 'multiply',
				opacity,
			}}
		/>
	);
};