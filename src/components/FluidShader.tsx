import React from 'react';
import {useCurrentFrame, useVideoConfig, interpolate} from 'remotion';

export const FluidShader: React.FC<{opacity?: number}> = ({opacity = 1}) => {
	const frame = useCurrentFrame();
	const {width, height} = useVideoConfig();

	// Mathematical fluid simulation parameters - deterministic and frame-based
	const time = frame * 0.02;
	
	// Create flowing wave patterns using deterministic interpolation
	const waveAlpha1 = interpolate(
		Math.sin(time),
		[-1, 1],
		[0.05, 0.15],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	
	const waveAlpha2 = interpolate(
		Math.sin(time + 0.5),
		[-1, 1],
		[0.08, 0.18],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	
	const waveAlpha3 = interpolate(
		Math.sin(time + 1),
		[-1, 1],
		[0.06, 0.16],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	// Fluid rotation effect
	const rotation = interpolate(
		frame,
		[0, 300],
		[0, 45],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	return (
		<div
			style={{
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				opacity,
				mixBlendMode: 'multiply',
			}}
		>
			{/* Base radial gradient for oil-like effect */}
			<div
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					background: `radial-gradient(ellipse at 30% 30%, 
						rgba(255, 248, 220, ${0.8 * opacity}) 0%, 
						rgba(255, 215, 0, ${0.6 * opacity}) 30%, 
						rgba(218, 165, 32, ${0.4 * opacity}) 60%, 
						rgba(184, 134, 11, ${0.2 * opacity}) 100%)`,
				}}
			/>
			
			{/* Flowing wave layers */}
			<div
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					background: `linear-gradient(${45 + rotation}deg, 
						rgba(255, 248, 220, ${waveAlpha1 * opacity}) 0%, 
						rgba(255, 223, 0, ${waveAlpha1 * 0.8 * opacity}) 50%, 
						rgba(255, 248, 220, ${waveAlpha1 * opacity}) 100%)`,
				}}
			/>
			
			<div
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					background: `linear-gradient(${90 + rotation * 0.7}deg, 
						rgba(255, 248, 220, ${waveAlpha2 * opacity}) 0%, 
						rgba(255, 223, 0, ${waveAlpha2 * 0.8 * opacity}) 50%, 
						rgba(255, 248, 220, ${waveAlpha2 * opacity}) 100%)`,
				}}
			/>
			
			<div
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					background: `linear-gradient(${135 + rotation * 0.5}deg, 
						rgba(255, 248, 220, ${waveAlpha3 * opacity}) 0%, 
						rgba(255, 223, 0, ${waveAlpha3 * 0.8 * opacity}) 50%, 
						rgba(255, 248, 220, ${waveAlpha3 * opacity}) 100%)`,
				}}
			/>
		</div>
	);
};