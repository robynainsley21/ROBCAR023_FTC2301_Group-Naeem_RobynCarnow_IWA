// TEMPLATE

/*
firstName = 'John';
age = 35;
hobby = 'Coding';

const logTwice = () => {
  console(parameter)
  console(parameter)
}

function hobby () {
  logTwice(`Hello, ${name} (${age}). I love ${hobby}!`)
}

hobby()
*/


// MY CODE

/*
why did the original code not work?
- there was no input in the logtwice function, which replaces its value with the values in the callback in the 
  hobby function i.e. what is put in the () of a callback is the value that gets processed in another code block

*/

const firstName = 'John';
const age = 35;
const myHobby = 'Coding';

const logTwice = (parameter) => {
  console.log(parameter)
  console.log(parameter)
}

function hobby () {
  logTwice(`Hello, ${firstName} (${age}). I love ${myHobby}!`)
}

hobby()