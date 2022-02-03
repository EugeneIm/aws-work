import React from 'react'
import './SignIn.css'

function SignIn() {
	return (
		<>
			<div className='input-form'>
				<input type="text" placeholder="username"></input>
				<input type="text" placeholder="password"></input>
				<input type="text" placeholder="email"></input>
			</div>
			<div>
				<button className = "submit" type='submit'>Log In</button>
			</div>
		</>
	)
}

export default SignIn;