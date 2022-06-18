// Assignment 3: function calculate(data) -  calculate the total price of all products after applying a discount
function calculate(data) {
	const discount = 1- data.discount;
	const productList = data.products;
	const itemNum = productList.length;
	let sum = 0;
	for (let i = 0; i < itemNum; i++ ) {
		sum +=  productList[i].price;
	}
	const total = sum * discount;
	return total;
}