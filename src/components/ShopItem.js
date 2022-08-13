import React from 'react'

export default function ShopItem(props) {
	const { name, color, img, price } = props.item;
	/*const {item} = props;
	console.log('prop cards---', item, '\n name--', item.name);
	*/

	return (
		<div className="card_list">
			<div className="card_image">
				<img className='img' src={img} alt={name}></img>
			</div>
			<h3 className="card_title">{name}</h3>
			<div className="card_description">{color}</div>
			<div className="card_price">${price}</div>
			<div className='card_button'>
				<button className="button-cart">ADD TO CART</button>
			</div>
		</div>
	)
}