import React from "react";

const Like = ({liked, onClick}) => {
	const styles = {
		cursor: 'pointer'
	};
	let classes = 'fa fa-heart';
	if (!liked) classes += '-o';
	return <i style={styles} onClick={onClick} className={classes}/>
};

export default Like;
