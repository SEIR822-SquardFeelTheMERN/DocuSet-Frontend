import React from 'react';


function CreateForm({title, subject, content, handleChange, submitHandler}) {

	return (
		<div>
			<h1>Hello From create form</h1>
				<form className="form" onSubmit={submitHandler}>
					<input
							onChange={handleChange}
							type="text"
							placeholder="Title"
							id="input-title"
							value={title}
					/>
					<input
							onChange={handleChange}
							type="text"
							placeholder="Subject"
							id="input-subject"
							value={subject}
					/>
					<input
							onChange={handleChange}
							type="text"
							placeholder="Content"
							id="input-content"
							value={content}
					/>
			<button type='submit'>Submit</button>
	</form>
		</div>
	);
}

export default CreateForm;