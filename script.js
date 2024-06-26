//your JS code here. If required.
function throttle(callback, delay) {

	let timeOut = null;
	return (...args)=>{
		if(!timeOut){
				callback(...args)
			timeOut = setTimeout(()=>{
				timeOut = null;
			},delay)
		}
	}
}

module.exports = throttle;
