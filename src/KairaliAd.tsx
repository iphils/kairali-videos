import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {FluidShader} from './components/FluidShader';
import {WaveShader} from './components/WaveShader';
import {
	ElegantLeaf,
	FloralPattern,
	OilDrop,
	FeminineFlower,
	LuxuryBorder,
} from './components/SVGElements';

export const KairaliAd: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps, durationInFrames, width, height} = useVideoConfig();

	// Refined animation timings for premium feel
	const logoAppear = spring({
		fps,
		frame: frame - 20,
		config: {
			damping: 100,
			stiffness: 30,
		},
	});

	const titleAppear = spring({
		fps,
		frame: frame - 50,
		config: {
			damping: 120,
			stiffness: 35,
		},
	});

	const subtitleAppear = spring({
		fps,
		frame: frame - 80,
		config: {
			damping: 140,
			stiffness: 40,
		},
	});

	const benefitsAppear = spring({
		fps,
		frame: frame - 120,
		config: {
			damping: 160,
			stiffness: 30,
		},
	});

	const premiumAppear = spring({
		fps,
		frame: frame - 160,
		config: {
			damping: 140,
			stiffness: 35,
		},
	});

	const callToActionAppear = spring({
		fps,
		frame: frame - 240,
		config: {
			damping: 180,
			stiffness: 40,
		},
	});

	// Sophisticated floating animations
	const gentleFloat = interpolate(
		frame,
		[0, 120, 240],
		[0, -15, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const rotationCycle = interpolate(frame, [0, 300], [0, 360]);

	return (
		<AbsoluteFill
			style={{
				background: 'linear-gradient(135deg, #faf8f5 0%, #f5f2eb 25%, #ede6d3 50%, #e8dcc6 75%, #dfd2b5 100%)',
				fontFamily: '"Playfair Display", "Georgia", serif',
			}}
		>
			{/* Mathematical shader effects */}
			<WaveShader opacity={0.3} color="#ffd700" />
			<FluidShader opacity={0.2} />

			{/* Luxury border frame */}
			<LuxuryBorder width={width} height={height} opacity={0.4} />

			{/* Elegant decorative elements */}
			<div
				style={{
					position: 'absolute',
					top: '5%',
					right: '8%',
					transform: `translateY(${gentleFloat * 0.5}px) rotate(${rotationCycle * 0.1}deg)`,
				}}
			>
				<ElegantLeaf size={120} color="#6b7c32" opacity={0.6} />
			</div>

			<div
				style={{
					position: 'absolute',
					bottom: '12%',
					left: '6%',
					transform: `translateY(${-gentleFloat * 0.3}px) rotate(${-rotationCycle * 0.08}deg)`,
				}}
			>
				<FloralPattern size={100} color="#d4af37" opacity={0.5} />
			</div>

			<div
				style={{
					position: 'absolute',
					top: '20%',
					left: '85%',
					transform: `translateY(${gentleFloat * 0.7}px) rotate(${rotationCycle * 0.05}deg)`,
				}}
			>
				<FeminineFlower size={80} color="#dda0dd" opacity={0.4} />
			</div>

			<div
				style={{
					position: 'absolute',
					bottom: '25%',
					right: '88%',
					transform: `translateY(${-gentleFloat * 0.4}px)`,
				}}
			>
				<OilDrop size={60} color="#ffd700" opacity={0.5} />
			</div>

			{/* Main content container */}
			<AbsoluteFill
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					padding: '60px',
				}}
			>
				{/* Premium brand identity */}
				<div
					style={{
						transform: `scale(${logoAppear}) translateY(${interpolate(logoAppear, [0, 1], [30, 0])}px)`,
						opacity: logoAppear,
						textAlign: 'center',
						marginBottom: '30px',
					}}
				>
					<h1
						style={{
							fontSize: '82px',
							fontWeight: '300',
							color: '#2c3e1d',
							margin: '0',
							textShadow: '2px 2px 8px rgba(0,0,0,0.1)',
							fontFamily: '"Playfair Display", serif',
							letterSpacing: '2px',
							fontStyle: 'italic',
						}}
					>
						Kairali
					</h1>
					<div
						style={{
							fontSize: '18px',
							color: '#8b6914',
							marginTop: '10px',
							letterSpacing: '4px',
							fontWeight: '400',
							textTransform: 'uppercase',
							fontFamily: '"Lato", sans-serif',
						}}
					>
						Luxury Coconut Collection
					</div>
				</div>

				{/* Premium positioning */}
				<div
					style={{
						transform: `scale(${titleAppear}) translateY(${interpolate(titleAppear, [0, 1], [25, 0])}px)`,
						opacity: titleAppear,
						textAlign: 'center',
						marginBottom: '40px',
					}}
				>
					<h2
						style={{
							fontSize: '38px',
							color: '#8b4513',
							margin: '0',
							fontWeight: '400',
							fontStyle: 'italic',
							letterSpacing: '1px',
						}}
					>
						Pure Virgin • Artisan Crafted
					</h2>
					<p
						style={{
							fontSize: '22px',
							color: '#5d4e37',
							margin: '12px 0 0 0',
							fontWeight: '300',
							letterSpacing: '0.5px',
						}}
					>
						From the Heart of Kerala's Coastal Gardens
					</p>
				</div>

				{/* Beauty benefits for women */}
				<div
					style={{
						transform: `scale(${benefitsAppear}) translateY(${interpolate(benefitsAppear, [0, 1], [25, 0])}px)`,
						opacity: benefitsAppear,
						display: 'flex',
						justifyContent: 'space-around',
						width: '90%',
						marginBottom: '50px',
					}}
				>
					{[
						{
							title: 'Radiant Hair',
							subtitle: 'Silky Strength',
							description: 'Deep nourishment for lustrous, healthy hair',
						},
						{
							title: 'Glowing Skin',
							subtitle: 'Natural Beauty',
							description: 'Gentle hydration for soft, supple skin',
						},
						{
							title: 'Pure Care',
							subtitle: 'Baby Safe',
							description: 'Mild protection for delicate skin',
						},
					].map((benefit, index) => (
						<div
							key={benefit.title}
							style={{
								textAlign: 'center',
								padding: '30px 25px',
								backgroundColor: 'rgba(255, 255, 255, 0.7)',
								borderRadius: '20px',
								boxShadow: '0 8px 25px rgba(139, 105, 20, 0.15)',
								border: '1px solid rgba(212, 175, 55, 0.2)',
								transform: `translateY(${Math.sin(frame * 0.03 + index * 1.2) * 4}px)`,
								maxWidth: '260px',
								backdropFilter: 'blur(5px)',
							}}
						>
							<div
								style={{
									marginBottom: '15px',
									display: 'flex',
									justifyContent: 'center',
								}}
							>
								{index === 0 && <ElegantLeaf size={45} color="#6b7c32" />}
								{index === 1 && <FeminineFlower size={45} color="#dda0dd" />}
								{index === 2 && <OilDrop size={45} color="#ffd700" />}
							</div>
							<div
								style={{
									fontSize: '24px',
									color: '#2c3e1d',
									fontWeight: '500',
									marginBottom: '8px',
									fontFamily: '"Playfair Display", serif',
								}}
							>
								{benefit.title}
							</div>
							<div
								style={{
									fontSize: '16px',
									color: '#8b6914',
									fontStyle: 'italic',
									marginBottom: '10px',
									fontWeight: '400',
								}}
							>
								{benefit.subtitle}
							</div>
							<div
								style={{
									fontSize: '13px',
									color: '#5d4e37',
									fontWeight: '300',
									lineHeight: '1.3',
								}}
							>
								{benefit.description}
							</div>
						</div>
					))}
				</div>

				{/* Premium features */}
				<div
					style={{
						transform: `scale(${premiumAppear}) translateY(${interpolate(premiumAppear, [0, 1], [25, 0])}px)`,
						opacity: premiumAppear,
						textAlign: 'center',
						marginBottom: '40px',
						padding: '25px 50px',
						backgroundColor: 'rgba(139, 105, 20, 0.08)',
						borderRadius: '25px',
						border: '2px solid rgba(212, 175, 55, 0.3)',
						backdropFilter: 'blur(10px)',
					}}
				>
					<div
						style={{
							fontSize: '26px',
							color: '#2c3e1d',
							fontWeight: '400',
							marginBottom: '12px',
							fontFamily: '"Playfair Display", serif',
							fontStyle: 'italic',
						}}
					>
						Sustainably Sourced • Cold Pressed • Chemical Free
					</div>
					<div
						style={{
							fontSize: '16px',
							color: '#5d4e37',
							fontWeight: '300',
							letterSpacing: '0.5px',
						}}
					>
						Preserving nature's purity for modern wellness
					</div>
				</div>

				{/* Elegant product sizes */}
				<div
					style={{
						transform: `scale(${subtitleAppear}) translateY(${interpolate(subtitleAppear, [0, 1], [25, 0])}px)`,
						opacity: subtitleAppear,
						display: 'flex',
						justifyContent: 'center',
						gap: '40px',
						marginBottom: '40px',
					}}
				>
					{[
						{size: '60ml', price: '₹90', label: 'Travel Size'},
						{size: '250ml', price: '₹360', label: 'Most Popular', premium: true},
						{size: '500ml', price: 'Available', label: 'Family Size'},
					].map((item, index) => (
						<div
							key={item.size}
							style={{
								textAlign: 'center',
								padding: '22px 32px',
								backgroundColor: item.premium ? '#8b6914' : 'rgba(139, 105, 20, 0.8)',
								color: 'white',
								borderRadius: '20px',
								transform: `scale(${1 + Math.sin(frame * 0.05 + index * 0.8) * 0.02})`,
								border: item.premium ? '3px solid #d4af37' : '1px solid rgba(212, 175, 55, 0.5)',
								position: 'relative',
								boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
								backdropFilter: 'blur(5px)',
							}}
						>
							{item.premium && (
								<div
									style={{
										position: 'absolute',
										top: '-10px',
										left: '50%',
										transform: 'translateX(-50%)',
										fontSize: '11px',
										backgroundColor: '#d4af37',
										color: '#2c3e1d',
										padding: '4px 12px',
										borderRadius: '12px',
										fontWeight: '600',
										letterSpacing: '0.5px',
									}}
								>
									{item.label}
								</div>
							)}
							<div style={{fontSize: '24px', fontWeight: '600', marginBottom: '6px'}}>
								{item.size}
							</div>
							<div style={{fontSize: '18px', fontWeight: '300', marginBottom: '4px'}}>
								{item.price}
							</div>
							{!item.premium && (
								<div style={{fontSize: '12px', opacity: '0.8', fontStyle: 'italic'}}>
									{item.label}
								</div>
							)}
						</div>
					))}
				</div>

				{/* Sophisticated call to action */}
				<div
					style={{
						transform: `scale(${callToActionAppear}) translateY(${interpolate(callToActionAppear, [0, 1], [25, 0])}px)`,
						opacity: callToActionAppear,
						textAlign: 'center',
					}}
				>
					<div
						style={{
							fontSize: '28px',
							color: '#8b4513',
							fontWeight: '400',
							padding: '30px 50px',
							backgroundColor: 'rgba(255, 255, 255, 0.9)',
							borderRadius: '35px',
							boxShadow: '0 10px 30px rgba(139, 105, 20, 0.25)',
							border: '2px solid rgba(212, 175, 55, 0.4)',
							fontStyle: 'italic',
							fontFamily: '"Playfair Display", serif',
							backdropFilter: 'blur(10px)',
						}}
					>
						Experience Pure Luxury in Every Drop
					</div>
					<div
						style={{
							fontSize: '15px',
							color: '#5d4e37',
							marginTop: '20px',
							fontWeight: '300',
							letterSpacing: '1.5px',
							textTransform: 'uppercase',
						}}
					>
						VKP Industries • Crafting Excellence Since Generations
					</div>
				</div>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};