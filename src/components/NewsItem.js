import { Component } from "react";

export default class NewsItems extends Component {
	render () {
		const {imgUrl,headline,description,newslink} = this.props
		return(
			<div className="container bg-gradient-to-r from-black to-red-800 overflow-y-scroll border-2 border-white rounded md:w-[15em] h-fit mx-auto">
				<img className="rounded" src={imgUrl?imgUrl:"https://res.cloudinary.com/teepublic/image/private/s--OQcK-yz7--/c_crop,x_10,y_10/c_fit,h_1109/c_crop,g_north_west,h_1260,w_1260,x_-138,y_-76/co_rgb:ffffff,e_colorize,u_Misc:One%20Pixel%20Gray/c_scale,g_north_west,h_1260,w_1260/fl_layer_apply,g_north_west,x_-138,y_-76/bo_0px_solid_white/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1539384919/production/designs/3309274_0.jpg"} alt="" />
				<div className="brief p-2 text-white">
					<div className="heading p-2 m-2 font-bold "> {headline} </div>
					<div className=" description m-2 p-2 text-sm"> {description?description:"No Description is available"} </div>
			</div>

			         <div className="text-white text-center mb-4"><a className="p-2 bg-blue-700 rounded" href={newslink} target="_blank" rel="noreferrer">Read More</a></div>
			</div>
		)
	}
}
