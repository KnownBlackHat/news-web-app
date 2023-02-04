import { Component } from "react";
import Navbar from "./components/Navbar";
import NewsForm from "./components/NewsForm";

export default class App extends Component {
	render(){
		document.body.classList.add("bg-black")
		return(
			<>
			<Navbar />
			<NewsForm />
			</>
		)}
}
