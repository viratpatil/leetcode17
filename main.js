/**
 * @param {string} digits
 * @return {string[]}
 */
/**
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function() {
    
    const digits = document.getElementById("digits").value;
    
    let finalArray = [];
    const digitsArray = [ "", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    
    let stringsArray = [] ;
    let invalidDigits = false;
    const inputDigitsArray = digits.split("");
    for (let i = 0; i< inputDigitsArray.length; i++)
    {
    	const numberValue = Number(inputDigitsArray[i]);
        if (isNaN(numberValue) || digitsArray[numberValue] === '')
        {
        	invalidDigits = true;
          break;
        }
        else
        {
          stringsArray.push(digitsArray[numberValue].split(""));
        }
    }
    
    if (inputDigitsArray.length === 0)
    {
        invalidDigits = true;
    }
    
    if (invalidDigits)
    {
    	document.getElementById("arrayText").innerHTML = "Enter Valid Numbers. Check Problem Defination"
		return [];
    }
    
    
    recursiveFunction(finalArray,stringsArray,0, "")
    
    console.log(finalArray);
    document.getElementById("arrayText").innerHTML = finalArray.toString();
    return finalArray;
}

var recursiveFunction = function(fa, sa, idx, value) {
	
  let arrayLetters = sa[idx];
   
  	
  for (var k = 0; k < arrayLetters.length; k++)
  {

    let letter = value + arrayLetters[k];
		
    
    if ( (idx + 1 )  < sa.length)
    {
      recursiveFunction(fa, sa, idx + 1 , letter);
    }
    else
    {
    	
      fa.push(letter);
    }
  }  
}
