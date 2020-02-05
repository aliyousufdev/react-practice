import React from "react";

const LikeButton = (props) => {
	const styles = {
		pointer: 'cursor'
	};
	if (props.liked) return <i style={styles} className="fa fa-heart"/>;
	return <i style={styles} className="fa fa-heart-o"/>
};

export default LikeButton;