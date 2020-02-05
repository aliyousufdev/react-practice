import React from "react";

const getLikeButtonClasses = (liked=false) => {
	if (liked) return 'fa fa-heart text-danger';
	return 'fa fa-heart-o'
};

const LikeButton = (props) => {
	const styles = {
		cursor: 'pointer'
	};
	return <i style={styles} onClick={() => props.onLiked(props.id)} className={getLikeButtonClasses(props.liked)}/>
};




export default LikeButton;