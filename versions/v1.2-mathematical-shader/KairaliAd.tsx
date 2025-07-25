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

	// Animation timings - more organic, slower pacing
	const logoAppear = spring({
		fps,
		frame: frame - 15,
		config: {
			damping: 150,
			stiffness: 50,
		},
	});

	const titleAppear = spring({
		fps,
		frame: frame - 40,
		config: {
			damping: 200,
			stiffness: 60,
		},
	});

	const subtitleAppear = spring({
		fps,
		frame: frame - 70,
		config: {
			damping: 180,
			stiffness: 50,
		},
	});

	const benefitsAppear = spring({
		fps,
		frame: frame - 100,
		config: {
			damping: 200,
			stiffness: 40,
		},
	});

	const sustainabilityAppear = spring({
		fps,
		frame: frame - 140,
		config: {
			damping: 150,
			stiffness: 45,
		},
	});

	const callToActionAppear = spring({
		fps,
		frame: frame - 220,
		config: {
			damping: 200,
			stiffness: 50,
		},
	});

	// More subtle, organic floating animation
	const floatAnimation = interpolate(
		frame,
		[0, 90, 180, 270],
		[0, -8, 0, 8],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	// Gentle rotation for natural feel
	const gentleRotation = interpolate(frame, [0, 300], [0, 360]);

	return (
		<AbsoluteFill
			style={{
				// More natural, earthy gradient
				background: 'radial-gradient(ellipse at center, #f7f4e9 0%, #e8dcc0 50%, #d4c5a0 100%)',
				fontFamily: '"Georgia", "Times New Roman", serif',
			}}
		>
			{/* Natural decorative elements */}
			<div
				style={{
					position: 'absolute',
					top: '8%',
					right: '12%',
					transform: `translateY(${floatAnimation * 0.7}px) rotate(${gentleRotation * 0.1}deg)`,
					opacity: 0.08,
					fontSize: '180px',
					color: '#8b7355',
				}}
			>
				🌿
			</div>
			<div
				style={{
					position: 'absolute',
					bottom: '20%',
					left: '8%',
					transform: `translateY(${-floatAnimation * 0.5}px) rotate(${-gentleRotation * 0.15}deg)`,
					opacity: 0.06,
					fontSize: '200px',
					color: '#a0956b',
				}}
			>
				🥥
			</div>
			<div
				style={{
					position: 'absolute',
					top: '50%',
					left: '85%',
					transform: `translateY(${floatAnimation * 0.3}px) rotate(${gentleRotation * 0.08}deg)`,
					opacity: 0.05,
					fontSize: '120px',
					color: '#6b7c32',
				}}
			>
				🌱
			</div>

			{/* Main content container */}
			<AbsoluteFill
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					padding: '50px',
				}}
			>
				{/* Brand Logo/Title - more organic */}
				<div
					style={{
						transform: `scale(${logoAppear}) translateY(${interpolate(logoAppear, [0, 1], [40, 0])}px)`,
						opacity: logoAppear,
						textAlign: 'center',
						marginBottom: '25px',
					}}
				>
					<h1
						style={{
							fontSize: '78px',
							fontWeight: '300',
							color: '#2c4a1e',
							margin: '0',
							textShadow: '1px 1px 3px rgba(0,0,0,0.1)',
							fontFamily: '"Georgia", serif',
							letterSpacing: '1px',
						}}
					>
						Kairali
					</h1>
					<div
						style={{
							fontSize: '22px',
							color: '#6b7c32',
							marginTop: '8px',
							letterSpacing: '3px',
							fontWeight: '400',
							textTransform: 'uppercase',
						}}
					>
						Pure Coconut Essence
					</div>
				</div>

				{/* Sustainability message */}
				<div
					style={{
						transform: `scale(${titleAppear}) translateY(${interpolate(titleAppear, [0, 1], [25, 0])}px)`,
						opacity: titleAppear,
						textAlign: 'center',
						marginBottom: '35px',
					}}
				>
					<h2
						style={{
							fontSize: '42px',
							color: '#8b4513',
							margin: '0',
							fontWeight: '400',
							fontStyle: 'italic',
						}}
					>
						Handcrafted in Kerala
					</h2>
					<p
						style={{
							fontSize: '26px',
							color: '#5d6b3a',
							margin: '8px 0 0 0',
							fontWeight: '300',
						}}
					>
						100% Virgin • Naturally Pure • Ethically Sourced
					</p>
				</div>

				{/* Benefits section - more natural presentation */}
				<div
					style={{
						transform: `scale(${benefitsAppear}) translateY(${interpolate(benefitsAppear, [0, 1], [25, 0])}px)`,
						opacity: benefitsAppear,
						display: 'flex',
						justifyContent: 'space-around',
						width: '85%',
						marginBottom: '45px',
					}}
				>
					{[
						{benefit: 'Hair Nourishment', icon: '🌾', desc: 'Natural Strength'},
						{benefit: 'Skin Wellness', icon: '🍃', desc: 'Gentle Care'},
						{benefit: 'Baby Safe', icon: '🤱', desc: 'Pure & Mild'},
					].map((item, index) => (
						<div
							key={item.benefit}
							style={{
								textAlign: 'center',
								padding: '25px 20px',
								backgroundColor: 'rgba(255, 253, 245, 0.7)',
								borderRadius: '25px',
								boxShadow: '0 3px 12px rgba(139, 115, 85, 0.15)',
								border: '1px solid rgba(139, 115, 85, 0.1)',
								transform: `translateY(${Math.sin(frame * 0.04 + index * 0.8) * 3}px)`,
								maxWidth: '220px',
							}}
						>
							<div style={{fontSize: '40px', marginBottom: '12px'}}>
								{item.icon}
							</div>
							<div
								style={{
									fontSize: '20px',
									color: '#2c4a1e',
									fontWeight: '500',
									marginBottom: '5px',
								}}
							>
								{item.benefit}
							</div>
							<div
								style={{
									fontSize: '14px',
									color: '#6b7c32',
									fontStyle: 'italic',
									fontWeight: '300',
								}}
							>
								{item.desc}
							</div>
						</div>
					))}
				</div>

				{/* Sustainable messaging */}
				<div
					style={{
						transform: `scale(${sustainabilityAppear}) translateY(${interpolate(sustainabilityAppear, [0, 1], [25, 0])}px)`,
						opacity: sustainabilityAppear,
						textAlign: 'center',
						marginBottom: '35px',
						padding: '20px 40px',
						backgroundColor: 'rgba(107, 124, 50, 0.1)',
						borderRadius: '20px',
						border: '2px solid rgba(107, 124, 50, 0.2)',
					}}
				>
					<div
						style={{
							fontSize: '28px',
							color: '#2c4a1e',
							fontWeight: '400',
							marginBottom: '8px',
						}}
					>
						🌍 Sustainably Harvested
					</div>
					<div
						style={{
							fontSize: '18px',
							color: '#5d6b3a',
							fontStyle: 'italic',
							fontWeight: '300',
						}}
					>
						Supporting local farmers • Eco-friendly processes
					</div>
				</div>

				{/* Product sizes - more organic presentation */}
				<div
					style={{
						transform: `scale(${subtitleAppear}) translateY(${interpolate(subtitleAppear, [0, 1], [25, 0])}px)`,
						opacity: subtitleAppear,
						display: 'flex',
						justifyContent: 'center',
						gap: '35px',
						marginBottom: '35px',
					}}
				>
					{[
						{size: '60ml', price: '₹90', popular: false},
						{size: '250ml', price: '₹360', popular: true},
						{size: '500ml', price: 'Available', popular: false},
					].map((item, index) => (
						<div
							key={item.size}
							style={{
								textAlign: 'center',
								padding: '18px 28px',
								backgroundColor: item.popular ? '#6b7c32' : 'rgba(107, 124, 50, 0.8)',
								color: 'white',
								borderRadius: '18px',
								transform: `scale(${1 + Math.sin(frame * 0.06 + index * 0.7) * 0.03})`,
								border: item.popular ? '3px solid #8b4513' : 'none',
								position: 'relative',
							}}
						>
							{item.popular && (
								<div
									style={{
										position: 'absolute',
										top: '-8px',
										left: '50%',
										transform: 'translateX(-50%)',
										fontSize: '12px',
										backgroundColor: '#8b4513',
										color: 'white',
										padding: '2px 8px',
										borderRadius: '10px',
										fontWeight: '500',
									}}
								>
									Popular
								</div>
							)}
							<div style={{fontSize: '22px', fontWeight: '600'}}>
								{item.size}
							</div>
							<div style={{fontSize: '16px', marginTop: '6px', fontWeight: '300'}}>
								{item.price}
							</div>
						</div>
					))}
				</div>

				{/* Call to action - more authentic */}
				<div
					style={{
						transform: `scale(${callToActionAppear}) translateY(${interpolate(callToActionAppear, [0, 1], [25, 0])}px)`,
						opacity: callToActionAppear,
						textAlign: 'center',
					}}
				>
					<div
						style={{
							fontSize: '30px',
							color: '#8b4513',
							fontWeight: '400',
							padding: '25px 45px',
							backgroundColor: 'rgba(255, 253, 245, 0.95)',
							borderRadius: '30px',
							boxShadow: '0 5px 18px rgba(139, 115, 85, 0.2)',
							border: '2px solid rgba(107, 124, 50, 0.3)',
							fontStyle: 'italic',
						}}
					>
						Crafted with Care, Rooted in Tradition ✨
					</div>
					<div
						style={{
							fontSize: '16px',
							color: '#6b7c32',
							marginTop: '18px',
							fontWeight: '300',
							letterSpacing: '1px',
						}}
					>
						VKP Industries • Naturally Yours Since Generations
					</div>
				</div>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};