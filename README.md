# animate number counters
You can easily animate a number counter like the Pros do! 
<br>
# demo
You can see the demo from <a href="https://codepen.io/mrkeshi/pen/YzLPYqY">here</a>

# usage
1-Link scrpit animate.js to your html file
<br><br>
2-Define a class animateNumber 
<br>
```
    new animateNumber({
    parentSelector: '#keshi',
    time: 4000,
    event:'load' , //you can use scroll and..
})
```
<br><br>
3-set data-count attribute and parent element
```
 <div id="parent">
        <div data-count="233">0</div>
    </div>
```
