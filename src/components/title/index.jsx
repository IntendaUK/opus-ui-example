import './styles.css'

const Title = ({ id, classNames, style, state: { cpt } }) => {
	return (
		<div
			key={id}
			className={classNames}
			style={style}
		>
			{cpt}
		</div>
	);
};

export default Title;
