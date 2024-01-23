

/* Author: Luc Langis
   Title: Working with strings
   Date: 2024-01-19*/


   let l = '----------------';

   console.log(l);

   let firstName = 'Luc';
   let lastName = 'Langis';
   let age = 38;

   let msgConcat = 'My name is ' + firstName + ' ' + lastName + ' my age is ' + age + '.';
   console.log(msgConcat);
   console.log(l);

   let msgStringLiteral = `My name is ${firstName} ${lastName}
    and my age is ${age}.`
   console.log(msgStringLiteral);
   console.log(l);

   console.log('Length of msgConcat is ', msgConcat.length);
   console.log(l);
   console.log('Length of msgStringLiteral is ', msgStringLiteral.length);

   let a = "Add a new line \n\n this is another line";
   console.log(l);
   console.log(a);

   