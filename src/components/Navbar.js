import { Component } from "react";
export default class Navbar extends Component {
	render() { 
		return(
			<nav className="justify-center text-white rounded p-4 m-4 items-center bg-gradient-to-t from-black to-red-900">
				<ul className="flex space-x-4">
					{/*<li>Category:
						<select>
						  <option value="business">Business</option>
						  <option value="entertainment">Entertainment</option>
						  <option value="general">General</option>
						  <option value="health">health</option>
						  <option value="science">science</option>
						  <option value="sports">sports</option>
						  <option value="technology">technology</option>
						</select>
					</li>*/}
					<li>Home</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</nav>
		)
	}
}
