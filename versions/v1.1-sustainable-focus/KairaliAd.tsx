import React from 'react';
import {
	AbsoluteFill,
	Img,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const KairaliAd: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps, durationInFrames} = useVideoConfig();

	// Animation timings
	const logoAppear = spring({
		fps,
		frame: frame - 10,
		config: {
			damping: 200,
		},
	});

	const titleAppear = spring({
		fps,
		frame: frame - 30,
		config: {
			damping: 200,
		},
	});

	const subtitleAppear = spring({
		fps,
		frame: frame - 50,
		config: {
			damping: 200,
		},
	});

	const benefitsAppear = spring({
		fps,
		frame: frame - 80,
		config: {
			damping: 200,
		},
	});

	const callToActionAppear = spring({
		fps,
		frame: frame - 200,
		config: {
			damping: 200,
		},
	});

	// Floating animation for coconut pieces
	const floatAnimation = interpolate(
		frame,
		[0, 60, 120],
		[0, -10, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	return (
		<AbsoluteFill
			style={{
				backgroundColor: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
				background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
				fontFamily: 'Arial, sans-serif',
			}}
		>
			{/* Background coconut pieces - decorative */}
			<div
				style={{
					position: 'absolute',
					top: '10%',
					right: '10%',
					transform: `translateY(${floatAnimation}px) rotate(${frame * 0.5}deg)`,
					opacity: 0.1,
					fontSize: '200px',
				}}
			>
				🥥
			</div>
			<div
				style={{
					position: 'absolute',
					bottom: '15%',
					left: '5%',
					transform: `translateY(${-floatAnimation}px) rotate(${-frame * 0.3}deg)`,
					opacity: 0.1,
					fontSize: '150px',
				}}
			>
				🥥
			</div>

			{/* Main content container */}
			<AbsoluteFill
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					padding: '40px',
				}}
			>
				{/* Brand Logo/Title */}
				<div
					style={{
						transform: `scale(${logoAppear}) translateY(${interpolate(logoAppear, [0, 1], [50, 0])}px)`,
						opacity: logoAppear,
						textAlign: 'center',
						marginBottom: '30px',
					}}
				>
					<h1
						style={{
							fontSize: '72px',
							fontWeight: 'bold',
							color: '#2d5016',
							margin: '0',
							textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
							fontFamily: 'Georgia, serif',
						}}
					>
						Kairali
					</h1>
					<div
						style={{
							fontSize: '24px',
							color: '#5d8f47',
							marginTop: '5px',
							letterSpacing: '2px',
						}}
					>
						COCONUT MILK OIL
					</div>
				</div>

				{/* Product subtitle */}
				<div
					style={{
						transform: `scale(${titleAppear}) translateY(${interpolate(titleAppear, [0, 1], [30, 0])}px)`,
						opacity: titleAppear,
						textAlign: 'center',
						marginBottom: '40px',
					}}
				>
					<h2
						style={{
							fontSize: '48px',
							color: '#d67b2a',
							margin: '0',
							fontWeight: '600',
						}}
					>
						100% Pure Virgin
					</h2>
					<p
						style={{
							fontSize: '28px',
							color: '#5d8f47',
							margin: '10px 0 0 0',
							fontStyle: 'italic',
						}}
					>
						Product of Kerala
					</p>
				</div>

				{/* Benefits section */}
				<div
					style={{
						transform: `scale(${benefitsAppear}) translateY(${interpolate(benefitsAppear, [0, 1], [30, 0])}px)`,
						opacity: benefitsAppear,
						display: 'flex',
						justifyContent: 'space-around',
						width: '80%',
						marginBottom: '50px',
					}}
				>
					{['Hair Care', 'Skin Care', 'Baby Care'].map((benefit, index) => (
						<div
							key={benefit}
							style={{
								textAlign: 'center',
								padding: '20px',
								backgroundColor: 'rgba(255, 255, 255, 0.8)',
								borderRadius: '20px',
								boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
								transform: `translateY(${Math.sin(frame * 0.05 + index) * 5}px)`,
							}}
						>
							<div style={{fontSize: '48px', marginBottom: '10px'}}>
								{index === 0 ? '💁‍♀️' : index === 1 ? '✨' : '👶'}
							</div>
							<div
								style={{
									fontSize: '22px',
									color: '#2d5016',
									fontWeight: '500',
								}}
							>
								{benefit}
							</div>
						</div>
					))}
				</div>

				{/* Product sizes and pricing */}
				<div
					style={{
						transform: `scale(${subtitleAppear}) translateY(${interpolate(subtitleAppear, [0, 1], [30, 0])}px)`,
						opacity: subtitleAppear,
						display: 'flex',
						justifyContent: 'center',
						gap: '40px',
						marginBottom: '40px',
					}}
				>
					{[
						{size: '60ml', price: '₹90'},
						{size: '250ml', price: '₹360'},
						{size: '500ml', price: 'Available'},
					].map((item, index) => (
						<div
							key={item.size}
							style={{
								textAlign: 'center',
								padding: '15px 25px',
								backgroundColor: '#5d8f47',
								color: 'white',
								borderRadius: '15px',
								transform: `scale(${1 + Math.sin(frame * 0.08 + index) * 0.05})`,
							}}
						>
							<div style={{fontSize: '24px', fontWeight: 'bold'}}>
								{item.size}
							</div>
							<div style={{fontSize: '18px', marginTop: '5px'}}>
								{item.price}
							</div>
						</div>
					))}
				</div>

				{/* Call to action */}
				<div
					style={{
						transform: `scale(${callToActionAppear}) translateY(${interpolate(callToActionAppear, [0, 1], [30, 0])}px)`,
						opacity: callToActionAppear,
						textAlign: 'center',
					}}
				>
					<div
						style={{
							fontSize: '32px',
							color: '#d67b2a',
							fontWeight: 'bold',
							padding: '20px 40px',
							backgroundColor: 'rgba(255, 255, 255, 0.9)',
							borderRadius: '25px',
							boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
							border: '3px solid #5d8f47',
						}}
					>
						Made with Traditional Values ✨
					</div>
					<div
						style={{
							fontSize: '18px',
							color: '#5d8f47',
							marginTop: '15px',
							fontStyle: 'italic',
						}}
					>
						VKP Industries - Naturally Pure
					</div>
				</div>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};