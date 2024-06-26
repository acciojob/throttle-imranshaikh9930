//your JS code here. If required.
function throttle(callback, delay) {

	let timeOut= null;
	return (...args)=>{
		if(!timeOut){
			timeOut = setTimeout(()=>{
				callback(...args)
				timeOut = null;
			},delay)
		}
	}
}

module.exports = throttle;
