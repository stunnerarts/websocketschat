import { addition } from "./addition";

console.log("Hello World!... addtion: " + addition(3, 1));
let printLogs = () => {
	let message = "Hello World!";
	return message;
};
const person = {
	name: 'john smith',
	dob: '5/31/1992'
}
const info = {
	address: '1233 talor park way, baltmore md 21133',
	phone: '401-555-5555'
};
const personsInfo = { //spread operator usage
	...person,
	...info
 }

console.log(printLogs());
console.log(personsInfo);