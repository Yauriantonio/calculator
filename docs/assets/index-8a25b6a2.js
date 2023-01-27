(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const u of t.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();document.querySelector("#appi").innerHTML=`


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
`;
