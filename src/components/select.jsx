import React from "react";
const PostSelect = ({options,defaultValue,value,changeSelect})=>{
	return (
			<select name="sel" id="" onChange={event=>changeSelect(event.target.value)} value={value}>
				<option disabled value='value'>{defaultValue}</option>
				{options.map(option=>
					<option key={option.value} value={option.value}>
						{option.name}
					</option>
				)}
			</select>
	)
}
export default PostSelect;