


function runLenghtEncoding(string) {
    let res = '';
    if (string.length > 0) {
        var count = 1;
        var value = string[0];
        for (var i = 1; i < string.length; ++i) {
			var entry = string[ i ];
            if (entry == value && count != 9) {
                count += 1;
            } else {
              	res += count +value;
              	count = 1;
				value = entry;
            }
        }
      	res += count + entry;
    }
    return res;
}

console.log(runLenghtEncoding("AAAAAAAAAAAAABBCCCCDD"))

console.log(runLenghtEncoding("aA"))

console.log(runLenghtEncoding("122333"))