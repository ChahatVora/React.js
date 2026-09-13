-in react in function you can only return one element so whether you can use any element like div or fragger(general) <></>.

-in fragger you can take multiple element.

-you have to give capital letter of first letter of your function it is compulsary also same of export and component name at another jsx file where you have to import.(and also for your jsx file name it is good practice)

-how react can see the html element here it is below
-const reactElement = {
    type: 'a',
    prop:{
        href:'https://google.com',
        target: '_blank'

    },
    children: 'visit google'
}
- and then it render it into html page through javascript.

- also in react if i give reactelement means i directly pass to render then it is not working because of it is also expecting some king of structure like they have their own function.

- if i give value according to their property then it is working.

- here in element in {here we give evaluated expression (final outcome)}.
