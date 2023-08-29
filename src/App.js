import React, { useState } from "react";
import './index.scss';
import PostList from "./components/Post-list";
import AddPost from "./components/Add-post-form";
import PostSelect from "./components/select";
const App = ()=>  {
	const posts = [
		{desc: " vbgbdbgbvdb", id: 1, text: "vfvdgbdggdbd"},
		{desc: "bbgdbgdbg", id: 2, text: "gfdgdbgdgd"},
		{desc: "fdbdgbdg", id: 3, text: "fdbgdbgfb"}
	]
	const[state,setState] = useState(posts);
	const[post,setPost] = useState({text:'',desc:''})

	function addNewPost(e){
		e.preventDefault();
		if(post.text.length>0&&post.desc.length>0){
			setState([...state,{...post,id:state.length+1}])
		};
		setPost({text:'',desc:''});
	}
	const removePost = (post)=>{
		setState(state.filter((p)=>p.id !== post.id))
	}
	const [selected,setSelected] = useState('');
	const sortPosts = (sort)=>{
		setSelected(sort);
		setState([...state].sort((a,b)=>a[sort].localeCompare(b[sort])))
	}
		return(
		<div className="wrapper">
			 <header className="header">Header</header>
			<main className="main">
				<AddPost 
				postChangeT = {(e)=>setPost({...post,text:e.target.value})}
				postChangeD={(e)=>setPost({...post,desc:e.target.value})} 
				title = {post.text} desc = {post.desc} addNewPost = {addNewPost}
				/>
				<PostSelect defaultValue='Сортировка' options={[
					{value:'text',name:'По названию'},
					{value:'desc',name:'По описанию'}
					]}
					changeSelect={sortPosts}
					value={selected}/>
			{state.length>0?<PostList remove = {removePost} 
			title = 'Posts about Js' posts = {state}/>:<div className="title">Посты не найдены</div>}
			</main>
			<aside className="sidebar">Sidebar</aside>
		</div>
	)
}

export default App;