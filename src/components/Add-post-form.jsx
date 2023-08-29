import React from "react";
const AddPost = ({addNewPost,title,desc,postChangeT,postChangeD})=>{
	return(
		<form className="add-form" action="">
			<input value={title} onChange={postChangeT} className="add-form__input" 
			 type="text" placeholder="Название поста" />

			<input value={desc} onChange={postChangeD} className="add-form__input" 
			type="text" placeholder="Описание поста" />
			
			<button className="btn"  onClick={addNewPost}>Создать пост</button>
		</form>
	)
}
export default AddPost;