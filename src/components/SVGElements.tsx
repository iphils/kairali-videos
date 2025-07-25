import React from 'react';

export const ElegantLeaf: React.FC<{
	size?: number;
	color?: string;
	opacity?: number;
}> = ({size = 100, color = '#6b7c32', opacity = 1}) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 100 100"
		style={{opacity}}
	>
		<defs>
			<linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
				<stop offset="0%" stopColor={color} stopOpacity="0.8" />
				<stop offset="50%" stopColor="#8fbc8f" stopOpacity="0.6" />
				<stop offset="100%" stopColor={color} stopOpacity="0.4" />
			</linearGradient>
		</defs>
		<path
			d="M20 80 Q50 20 80 80 Q50 60 20 80"
			fill="url(#leafGradient)"
			stroke={color}
			strokeWidth="1"
		/>
		<path
			d="M50 20 Q50 40 50 80"
			stroke={color}
			strokeWidth="1.5"
			fill="none"
			opacity="0.7"
		/>
	</svg>
);

export const FloralPattern: React.FC<{
	size?: number;
	color?: string;
	opacity?: number;
}> = ({size = 120, color = '#d4af37', opacity = 1}) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 120 120"
		style={{opacity}}
	>
		<defs>
			<radialGradient id="floralGradient" cx="50%" cy="50%" r="50%">
				<stop offset="0%" stopColor={color} stopOpacity="0.9" />
				<stop offset="70%" stopColor="#f4e4bc" stopOpacity="0.5" />
				<stop offset="100%" stopColor={color} stopOpacity="0.2" />
			</radialGradient>
		</defs>
		<g transform="translate(60,60)">
			{[0, 72, 144, 216, 288].map((angle, i) => (
				<g key={i} transform={`rotate(${angle})`}>
					<ellipse
						cx="0"
						cy="-25"
						rx="8"
						ry="20"
						fill="url(#floralGradient)"
					/>
				</g>
			))}
			<circle
				cx="0"
				cy="0"
				r="6"
				fill={color}
				opacity="0.8"
			/>
		</g>
	</svg>
);

export const OilDrop: React.FC<{
	size?: number;
	color?: string;
	opacity?: number;
}> = ({size = 80, color = '#ffd700', opacity = 1}) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 80 80"
		style={{opacity}}
	>
		<defs>
			<radialGradient id="dropGradient" cx="30%" cy="30%" r="70%">
				<stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
				<stop offset="30%" stopColor={color} stopOpacity="0.9" />
				<stop offset="70%" stopColor="#daa520" stopOpacity="0.7" />
				<stop offset="100%" stopColor="#b8860b" stopOpacity="0.5" />
			</radialGradient>
		</defs>
		<path
			d="M40 10 Q55 25 55 40 Q55 55 40 60 Q25 55 25 40 Q25 25 40 10"
			fill="url(#dropGradient)"
			stroke="#daa520"
			strokeWidth="1"
		/>
		<ellipse
			cx="35"
			cy="25"
			rx="3"
			ry="5"
			fill="#ffffff"
			opacity="0.6"
		/>
	</svg>
);

export const FeminineFlower: React.FC<{
	size?: number;
	color?: string;
	opacity?: number;
}> = ({size = 90, color = '#dda0dd', opacity = 1}) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 90 90"
		style={{opacity}}
	>
		<defs>
			<radialGradient id="flowerGradient" cx="50%" cy="50%" r="50%">
				<stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
				<stop offset="30%" stopColor={color} stopOpacity="0.8" />
				<stop offset="100%" stopColor="#9370db" stopOpacity="0.6" />
			</radialGradient>
		</defs>
		<g transform="translate(45,45)">
			{[0, 60, 120, 180, 240, 300].map((angle, i) => (
				<g key={i} transform={`rotate(${angle})`}>
					<ellipse
						cx="0"
						cy="-20"
						rx="6"
						ry="18"
						fill="url(#flowerGradient)"
						stroke={color}
						strokeWidth="0.5"
					/>
				</g>
			))}
			<circle
				cx="0"
				cy="0"
				r="4"
				fill="#ffd700"
				opacity="0.9"
			/>
		</g>
	</svg>
);

export const LuxuryBorder: React.FC<{
	width: number;
	height: number;
	color?: string;
	opacity?: number;
}> = ({width, height, color = '#d4af37', opacity = 1}) => (
	<svg
		width={width}
		height={height}
		viewBox={`0 0 ${width} ${height}`}
		style={{opacity, position: 'absolute', top: 0, left: 0}}
	>
		<defs>
			<linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
				<stop offset="0%" stopColor={color} stopOpacity="0.8" />
				<stop offset="50%" stopColor="#f4e4bc" stopOpacity="0.4" />
				<stop offset="100%" stopColor={color} stopOpacity="0.8" />
			</linearGradient>
		</defs>
		<rect
			x="20"
			y="20"
			width={width - 40}
			height={height - 40}
			fill="none"
			stroke="url(#borderGradient)"
			strokeWidth="2"
			rx="15"
		/>
		<rect
			x="30"
			y="30"
			width={width - 60}
			height={height - 60}
			fill="none"
			stroke={color}
			strokeWidth="1"
			strokeOpacity="0.3"
			rx="10"
		/>
	</svg>
);