interface Props extends React.SVGProps<SVGSVGElement> {}

export default function Options(props: Props) {
	return (
		<svg {...props} className='size-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
				d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
			/>
		</svg>
	);
}
