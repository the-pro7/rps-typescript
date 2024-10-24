(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();function S(o){const a=o.querySelectorAll("[data-option]"),u=o.querySelector("[data-you]"),c=o.querySelector("[data-computer]"),e=o.querySelector("[data-winner]"),t=o.querySelector("[data-player-score]"),r=o.querySelector("[data-computer-score]"),d=["rock","paper","scissors"];let i="",l="",n=0,s=0;const f=20,h={rock:{beats:"scissors",defeatedBy:"paper"},scissors:{beats:"paper",defeatedBy:"rock"},paper:{beats:"rock",defeatedBy:"scissors"}};function m(){return Math.floor(Math.random()*d.length)}function b(){const p=d[m()];c.textContent=p,l=p}a.forEach(p=>{p.addEventListener("click",g=>{i=g.target.value,u.textContent=i,b(),C()})});function v(){n===f?(alert("You are the overall winner! 🎊"),y()):s===f&&(alert("Computer is the overall winner! 🎊"),y())}function y(){u.textContent="null",c.textContent="null",t.textContent="0",r.textContent="0",l="",i="",n=0,s=0,e.textContent=""}function C(){i===l?(e.textContent="It's a draw 😲!",n=n,s=s):h[i].beats===l?(n++,t.textContent=String(n),e.textContent="You win! 🎉"):(s++,r.textContent=String(s),e.textContent="Computer wins! 🤖"),v()}}document.querySelector("#app").innerHTML=` <div id='container'>
<div class="play-area">
        <h1 class="title">Rock, Paper, Scissors 👊📄✂</h1>
        <div class="options-container" data-options>
          <button data-option value="rock">👊Rock</button>
          <button data-option value="paper">📄Paper</button>
          <button data-option value="scissors">✂Scissors</button>
        </div>
        <div class="players">
          <span>Your choice: <b data-you>null</b></span>
          <span>Computer choice: <b data-computer>null</b></span>
        </div>
        <h1 data-winner aria-hidden="true" class="winner"></h1>
      </div>
      <div class="score-area">
        <h2>Your score: <b data-player-score>0</b></h2>
        <h2>Computer score: <b data-computer-score>0</b></h2>
      </div>
      <span class="winning-info"
        ><b>💡 Tip: </b>First to reach 20 points wins!!!</span
      ></div>`;S(document.querySelector("#container"));
