import React from "react";
import PostListItem from "./Post-list-item";
const PostList = (props)=>{
	const element = props.posts.map((elem,index)=>{
	return <li key={elem.id}>
			<PostListItem remove = {props.remove}  text = {elem.text}
			 desc = {elem.desc} post = {elem} number = {index+1}/>
			</li>
	});

	return(
		<ul className="post-list">
			<h1 className="post-list__title">{props.title}</h1>
			{element}
		</ul>
	)
}
export default PostList; 