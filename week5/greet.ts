'use strict';

// - Create variable named `nameToGreet` and assign the value `Green Fox` to it
// - Create a function called `greet()` that greets its input parameter
//     - It prints a greeting message e.g. `Greetings dear Green Fox`
//     - Handle the case when no parameters are given by printing the
//       `Please provide a name to greet` message
// - Don't forget to write `export` before the function
// - Greet `nameToGreet`

let nameToGreet: string = 'Chubrock';

export function greet(name?:string) {

    let greetingMsg: string = 'Greetings dear ';

    if (name == undefined) {

        console.log('Please provide a name to greet');
        
    } else {
        console.log(greetingMsg + name);
    }
    
}

greet(nameToGreet);