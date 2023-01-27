import './style.css'

document.querySelector('#appi').innerHTML = `


<div id="appi">
  <h1>Calculator</h1> 
      <form name="calculator">
        <input type="textfield" name="answer" value="" autocomplete="off" readonly placeholder="0">

            <input type="button" value="7" onclick ="document.calculator.answer.value +='7'">
            <input type="button" value="8" onclick ="document.calculator.answer.value +='8'">
            <input type="button" value="9" onclick ="document.calculator.answer.value +='9'">
            <input type="button" value="/" onclick ="document.calculator.answer.value +='/'" class="gray">
          <br>
            <input type="button" value="4" onclick ="document.calculator.answer.value +='4'">
            <input type="button" value="5" onclick ="document.calculator.answer.value +='5'">
            <input type="button" value="6" onclick ="document.calculator.answer.value +='6'">
            <input type="button" value="x" onclick ="document.calculator.answer.value +='*'" class="gray">
            <br>
            <input type="button" value="1" onclick ="document.calculator.answer.value +='1'">
            <input type="button" value="2" onclick ="document.calculator.answer.value +='2'">
            <input type="button" value="3" onclick ="document.calculator.answer.value +='3'">
            <input type="button" value="-" onclick ="document.calculator.answer.value +='-'" class="gray">
          <br>
            <input type="reset" value="C" class="gray">
            <input type="button" value="0" onclick ="document.calculator.answer.value +='0'">
            <input type="button" value="=" onclick ="document.calculator.answer.value =eval( document.calculator.answer.value )" class="gray">
            <input type="button" value="+" onclick ="document.calculator.answer.value +='+'" class="gray">
            


      </form>
      </div>
`

