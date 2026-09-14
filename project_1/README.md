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

-reconciliation in this two tree are compared ,one is browser tree and another is updated tree and both are compared and where then update where needed.also it is called virtual DOM.

- updation is based on optimization algorithm where which is updated first based on priority.

- in some cases you give the priority or react give.

-the comparesion between these two tree is done by fiber which is complex algorithm.

-here below is main things.

-pause work and come back to it later.
assign priority to different types of work.
reuse previously completed work.
abort work if it's no longer needed.

- for more information https://github.com/acdlite/react-fiber-architecture.