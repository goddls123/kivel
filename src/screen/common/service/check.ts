export function checkEssential(...args : any[]){
	let result : any = true
	let length = args.length
	for (let i= 0; i < length; i ++){
		result = result && args[i]
	}

	
	return result
}