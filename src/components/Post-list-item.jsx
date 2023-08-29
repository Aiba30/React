import React from "react";
const PostListItem = ({text,desc,number,remove,post})=>{
	return(
		<div className="post-list__item">
			<div><h3>{number}.{text}</h3></div>
			<div className="text">{desc}</div>
			<button onClick={()=>remove(post)} className="btn post-list__btn">Delete</button>
		</div>
	)
}
export default PostListItem;