// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
name = toUpperCase(name);
name = " '" + name + "' ";

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
			Temp = sentence.split(' ');
      sentence = '';
			for(var i = 0; i<Temp.length;i++){
      		Cap = Temp[i];
          Cap = Cap.replace(Cap.charAt(0),(Cap.charAt(0)).toUpperCase())
		    	sentence = sentence + Cap + ' ';
		}
    document.write(sentence);





// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
    re = /\D/g;
  	money = money.replaceAll(re,'');
