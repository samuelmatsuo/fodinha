(()=>{"use strict";var e={896:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=o(n(802));t.default=function(e,t){const n=document.createElement("div");if(n.className="div-msg",n.innerText=e,n.style.fontSize="30px",n.style.position="fixed",n.style.top="50%",n.style.left="50%",n.style.transform="translate(-50%, -50%)",n.style.backgroundColor="rgba(255, 255, 255, 0.8)",n.style.padding="10px",n.style.borderRadius="10px",n.style.boxShadow="0 0 10px rgba(0, 0, 0, 0.3)",n.style.animation="bounce 1s infinite alternate",(0,i.default)(n),t){function l(){document.body.contains(n)&&document.body.removeChild(n),clearTimeout(o)}var o=setTimeout(l,5e3)}document.body.appendChild(n)}},802:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=o(n(667));t.default=function(e){const t=document.createElement("button");t.className="button-msg",t.innerText="X",t.style.fontSize="10px",t.onclick=function(){(0,i.default)(e)},t.style.marginTop="10px",e.appendChild(t),document.body.appendChild(e)}},667:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){document.body.removeChild(e)}}},t={};!function n(o){var i=t[o];if(void 0!==i)return i.exports;var l=t[o]={exports:{}};return e[o].call(l.exports,l,l.exports,n),l.exports}(896)})();