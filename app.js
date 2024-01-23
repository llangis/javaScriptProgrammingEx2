

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

   /* Author: Luc Langis
   Title: Working with strings
   Date: 2024-01-23*/

   console.log(l);

   let b = 'abcdefg';

   console.log(b);

   b = b.toUpperCase();

   console.log(b);

   b = b.toLowerCase();


   console.log(l);
   //substr
   //abcdefg
   //0123456

   let c = b.substr(2,4);
   console.log(c);
   console.log(b);

   //substring
   //abcdefg
   //o123456

   let d = b.substring(2,6);
   console.log(d);

   console.log(l);

   let hisName = 'Christopher';

   let index = hisName.indexOf('ist');

   console.log(index);






