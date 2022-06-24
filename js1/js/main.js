



function getMatchResult(x,n) {
	
	if (typeof (n) == 'number' && n > 0) {
			let sum = '';
			for (let i = 1; i <= n; i++){
				if (i < n) {
					sum +=  `${x * i}---`;
				} else {
					sum +=  `${x * i}`;
				}
		}
		return sum;
		} else {
			return x;			
   	}
	
}

console.log(getMatchResult(4,5));



	
