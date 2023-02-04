import { Component } from "react";
import NewsItems from "./NewsItem";

export default class NewsForm extends Component {
	constructor () {
		super()
		this.state = { news: [{imgUrl: "https://cdn5.f-cdn.com/contestentries/1202480/27535097/5a2bebf1f37b8_thumb900.jpg", headline: "Loading headline...", description: "Loading description..."}] }
	}
	async componentDidMount() {
	const url = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=ae945a3808b4422cb9a869f02b127c42&pageSize=12&page=1`
	const data = await fetch(url)
	const parsedData = await data.json()
	this.setState({page: 1, pageContent: 12 ,news: parsedData.articles,maxpage: Math.ceil(parsedData.totalResults/12),loading: false})
	}

	prevbtn = async ()=>{
		this.setState({page: this.state.page, pageContent: this.state.pageContent ,news: this.state.news, maxpage: this.state.maxpage ,loading: "prv"})
		const url = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=ae945a3808b4422cb9a869f02b127c42&pageSize=${this.state.pageContent}&page=${this.state.page - 1}`
		const data = await fetch(url)
		const parsedData = await data.json()
		this.setState({page: this.state.page - 1, pageContent: this.state.pageContent ,news: parsedData.articles, maxpage: this.state.maxpage,loading: false})

	}
	
	nextbtn = async ()=>{
		this.setState({page: this.state.page, pageContent: this.state.pageContent ,news: this.state.news, maxpage: this.state.maxpage ,loading: "nxt"})
		const url = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=ae945a3808b4422cb9a869f02b127c42&pageSize=${this.state.pageContent}&page=${this.state.page + 1}`
		const data = await fetch(url)
		const parsedData = await data.json()
		this.setState({page: this.state.page + 1, pageContent: this.state.pageContent ,news: parsedData.articles, maxpage: this.state.maxpage ,loading: false})
}
	
	render() {
		return(
			<>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-4 p-2 gap-4">
			{this.state.news.map((item,index)=>{
			return	<NewsItems key={index} newslink={item.url} imgUrl={item.urlToImage} headline={item.title} description={item.description} />	
			})}
			</div>
			<div className="justify-between text-white m-4 flex">
			<button onClick={this.prevbtn} disabled={this.state.page<=1} className="disabled:cursor-not-allowed bg-red-800 rounded p-2 mx-2">&larr; {this.state.loading==="prv"?"Loading...":"Previous"}</button>
			<div id="pageno"><strong>Page: </strong>{this.state.page}/{this.state.maxpage}</div>
			<button onClick={this.nextbtn} disabled={this.state.page>=this.state.maxpage} className="disabled:cursor-not-allowed bg-red-800 rounded mx-2 p-2">{this.state.loading==="nxt"?"Loading...":"Next "}&rarr;</button> </div>
			</>
		)
	}
}
