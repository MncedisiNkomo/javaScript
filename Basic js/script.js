//Please read the questions before you start looking at W3Schools
 
        //You will be asked to do the following:
        
        //The difference between var and const is that var basically allows reassignment while const doesnt.
        
        //Linked the HTML file to javascript file using script src
        
        var sum = 10 +10; // example of addition
        console.log(sum);

        var difference = 45 - 33; //example of subtraction.
        console.log(difference);
        
        var division = 100 / 25; // example of division.
        console.log(division);

        
        var myArray = ["2","Knowledge","true, false"]
        myArray.push(0); // this adds the value 0 to the array.

        myArray.pop(0); // removes the last value of the array.

        console.log(myArray); // a console.log of the entire javaScript

        console.log(myArray[0]); //console of the first element in the array.

        console.log(myArray[2]);// console of the third element of the array.

        console.log(myArray.length); // this is the length of my array.

        myArray.push(7);// this adds a new value to the array.

        myArray.forEach((element)=> console.log(element)); //consoles the type of each element inside the array

        for( i = 0; i < myArray.length; i++){ // this for loop logs the type of each element.
            console.log(myArray[i]);
        }
        
        //1. - Write one sentence in a comment describing the difference between var and const

        //2. - Change your HTML code by moving the Javascript out of index.html and into script.js. Link the script in script.js to the HTML file

        //3. - Show an example of how to add, subtract, multiply and divide values using Javascript

        //4. - Write an example of how to declare an array. This array should be called myArray. It should contain a number, a string and a boolean

        //5. - Do a console.log of the entire JavaScript array

        //6. - Do a console.log of the first and the third element in the JavaScript array using []

        //7. - Remove the last value of an array using the pop method

        //8. - Add a new value to an array using the push method

        //9. - Console.log the length of your array (This should be three at this point)

        //10. - Add a new value to the array using []

        //11. - Change the first variable of your array to a string using []

        //12. - If you can, try console.log the type of each element inside the array

        //13. - (Bonus) - if you can, try using a for loop to log the type of each element - https://www.w3schools.com/js/js_loop_for.asp

    /*
        !!!!!!!! Assistance !!!!!!!!
        If you get stuck at any point, check the following advice: 

        For question 1 about variables, you should refer to last week's work if you get stuck
        For declaring myArray, refer to last week's work
        For seperating the HTML file and making a Javascript file, you can refer to https://www.w3schools.com/js/js_whereto.asp
        For arrays, you can refer to https://www.w3schools.com/js/js_arrays.asp, https://www.w3schools.com/js/js_array_methods.asp
        For typeof, refer to https://www.w3schools.com/js/js_typeof.asp
    */