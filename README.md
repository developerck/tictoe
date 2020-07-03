 demo url : https://developerck.github.io/tictoe/game.html
 
 <div id="overview">
         <br>
<hr>
        <h2>This is a tictoe game library.</h2>
        <h3>You can expand it according to your use.</h3>
        <p>Fucntion and properties are given below.</p>
        <p>Jquery required!.</p>
        <ul>
<li><h3>Properties</h3>
<ul>
<li><a href="#col" >col : No. of Column for table(Default:6)</a></li>
<li><a href="#row" >row: No. of Row for Table(Default:7)</a></li>
<li><a href="matchCount" >matchCount: on which user said to winner: (Default:4)</a></li>
<li><a href="#id" >id: id of div where you want to show your table.(Default:gametable)</a></li>
<li><a href="bfn" >bfn: You can pass a function that will execute before every move</a></li>
<li><a href="afn" >afn: You can pass a function that  will execute after every move</a></li>
</ul>

</li>
<li><h3>Functions</h3>
<ul>
<li><a href="#init">init(): initialize tictoe</a></li>
<li><a href="#move">move(): when move happen </a></li>
</ul>

</li>        
        </ul>
        
<fieldset id="init">
<legend>init()</legend>
<pre>
 tt.init(
 {
 "col":5,
 "row":6,
 'id':'gametable',
 "matchCount":3,
 "bfn":function(){alert('before move occurs')},
 "afn":function(){alert('after move occurs')}
 }
 );

or
tt.init() for default;
</pre>

</fieldset>  

<fieldset id="move">
<legend>move()</legend>
<pre>
 tt.move(obj);
 it takes current cell input element as an object
 
</pre>

</fieldset>        
        </div>
       
