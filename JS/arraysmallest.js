var arr = [4,1,9,5,0,-9];
		var smallest = arr[0];

		for(var i=1; i<arr.length; i++){
			if(arr[i] < smallest){
				smallest = arr[i];
			}
		}

		console.log(smallest);
