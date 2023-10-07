let iconScript=document.createElement("script");iconScript.src="https://kit.fontawesome.com/7a8d9e0b6f.js",iconScript.crossorigin="anonymous",document.head.appendChild(iconScript);class Console{constructor(){this.console=document.createElement("div"),this.console.id="debugger",this.console.style="\n      border: 1px solid white;\n      overflow-y: scroll;\n      height: auto;\n      flex: 5;\n    ",this.consoleContainer=document.createElement("div"),this.consoleContainer.style="\n      display: flex;\n      justify-content: flex-start;\n      flex-flow: column;\n      position: fixed;\n      padding: 5px;\n      color: white;\n      border: 1px solid white;\n      top: 30px;\n      right: 30px;\n      background-color: rgba(0, 0, 0, 0.9);\n      min-width: max(20vw, 300px);\n      width: max(35vw, 400px);\n      max-width: 95vw;\n      overflow-x: hidden;\n      overflow-y: no-scroll;\n      min-height: 20vh;\n      max-height: 95vh;\n      height: max(50vh, 300px);\n      resize: both;\n      font-size: 1.25rem;\n      user-select: none;\n      z-index: 50000;\n    ",this.consoleContainer.addEventListener("contextmenu",(e=>(e.preventDefault(),!1))),window.onerror=(e,t,n,i,o)=>{try{this.error(e,t,n,i,o)}catch(e){console.log(e)}};let e=document.createElement("h1");e.innerHTML="CONSOLE",e.style="\n      display: block;\n      position: relative;\n      border: 1px solid white;\n      text-align: center;\n      padding: 0 5px;\n      margin: 0;\n    ",this.vars={},this.queue=[],this.queueTotal=0,this.queueCompleted=1,this.continueQueue=!1,this.input=document.createElement("input"),this.input.type="text",this.input.style="\n      background-color: rgba(255, 255, 255, 0.2);\n      color: white;\n      padding: 5px;\n      border: 1px solid white;\n      outline: none;\n      box-shadow: none;\n      font-size: 1em;\n    ",this.input.placeholder="Commands",this.input.addEventListener("keyup",(async e=>{if("Enter"==e.key)try{let e=this.input.value,t=await this.parse.plainText(e);for(console.log(t),this.log(t),"log(this)"!=e.replaceAll(" ","")&&"log(this);"!=e.replaceAll(" ","")||(e="log(debug)"),["this.log(","console.log("].forEach((t=>{e=e.replaceAll(t,"debug.log(")})),["this.error(","console.error("].forEach((t=>{e=e.replaceAll(t,"debug.error(")})),["this.warn(","console.warn("].forEach((t=>{e=e.replaceAll(t,"debug.warn(")})),["this.clear(","console.clear(","clear("].forEach((t=>{e=e.replaceAll(t,"debug.clear(")})),["let ","const ","var "].forEach((t=>{e=e.replaceAll(t,"window.")}));e.includes("function ");)e=e.replace("function ","window."),e=e.replace("(","= function(");new Function(e)(),this.input.value=""}catch(e){this.error(e),console.log(e)}}));let t=document.createElement("p"),n=document.createElement("style");n.innerHTML+="\n      input::placeholder {\n        color: rgba(255,255,255,0.75);\n      }\n      input:disabled{\n        cursor: not-allowed;\n      }\n    ",n.innerHTML+="\n      @keyframes rotateUp {\n        from { rotate: 360deg; }\n        to { rotate: 180deg; }\n      }\n      @keyframes rotateDown {\n        from { rotate: 180deg; }\n        to { rotate: 360deg; }\n      }\n      @keyframes fadeOut {\n        from { flex: 5; }\n        to { flex: 1; }\n      }\n    ",document.head.appendChild(n),t.style="\n      padding: 5px;\n      margin: 30px 0;\n      background-color: rgba(0,0,0,0);\n      position: absolute;\n      font-size: 0.65em;\n      top: -30px;\n      right: 5px;\n      rotate: 180deg;\n      animation-name: rotateUp;\n      animation-duration: 0.5s;\n      animation-iteration-count: 1;\n      animation-fill-mode: forwards;\n    ",t.innerHTML='<i class="fa-solid fa-caret-up"></i>',e.appendChild(t),this.isConsoleHidden=!1,t.addEventListener("click",(e=>{"rotateUp"==getComputedStyle(t).animationName?t.style.animationName="rotateDown":t.style.animationName="rotateUp",t.style.animationIterationCount=1,this.isConsoleHidden?(this.consoleContainer.style.height=this.isConsoleHidden,this.console.style.display="block",this.input.style.display="block",this.consoleContainer.style.minHeight="20vh",this.isConsoleHidden=!1):(this.isConsoleHidden=getComputedStyle(this.consoleContainer).height,this.console.style.display="none",this.input.style.display="none",this.consoleContainer.style.minHeight="0",this.consoleContainer.style.height="fit-content",this.consoleContainer.style.minHeight=getComputedStyle(this.consoleContainer).height)})),window.debug=this,window.log=e=>{window.debug.log(e)},window.warn=e=>{window.debug.warn(e)},window.error=e=>{window.debug.error(e)},window.clear=()=>{this.clear()},this.isMobile()||(this.consoleContainer.appendChild(e),this.consoleContainer.appendChild(this.console),this.consoleContainer.appendChild(this.input),document.body.appendChild(this.consoleContainer),this.draggable(),this.executingQueue=!1,setInterval((()=>{this.queue.length>0&&!this.executingQueue&&(this.executingQueue=!0,this.executeQueue(this.queue).then((e=>{this.queue=[],this.executingQueue=!1})))}),100))}isMobile=function(){let e=!1;var t;return t=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0),e};createLogCount=function(){let e=document.createElement("p");return e.style="\n      display: none;\n      font-size: 0.8em;\n      margin: 0;\n      margin-left: auto;\n      width: min-content;\n      padding: 5px;\n      border: 1px solid white;\n      border-radius: 5px;\n    ",e.innerHTML="",e};appendErrors=async(e,t,n,i,o,a)=>{if(this.duplicateLog(e))return;let s=this.createMessage(),r=this.createMessageText(e);s.style.backgroundColor="#a10018",r.style.backgroundColor="rgba(0,0,0,0)";let l=document.createElement("p");l.style=" margin: 0; padding: 0 5px; color: lightgrey; font-size: 0.75em; width: fit-content",t&&(l.innerHTML+=t),n?l.innerHTML+=" Line:"+n+":"+i:l.innerHTML=a;let c=this.createLogCount();s.appendChild(r),s.appendChild(l),s.appendChild(c),this.console.appendChild(s),s.scrollIntoView(!1)};appendLogs=async(e,t)=>{if(this.duplicateLog(e))return;let n=this.createMessage(),i=this.createMessageText(e);i.style.backgroundColor="rgba(0,0,0,0)";let o=document.createElement("p");o.style="background-color: rgba(255,255,255,0.15); margin: 0; padding: 0 5px; color: lightgrey; font-size: 0.75em; width: fit-content",o.innerHTML=t;let a=this.createLogCount();n.appendChild(i),n.appendChild(o),n.appendChild(a),this.console.appendChild(n),n.scrollIntoView(!1),this.input.placeholder="",this.input.disabled=!1};appendWarns=async(e,t)=>{if(this.duplicateLog(e))return;let n=this.createMessage(),i=this.createMessageText(e);i.style.backgroundColor="rgba(0,0,0,0)",n.style.backgroundColor="rgba(255, 255, 0, 0.5)";let o=document.createElement("p");o.style=" margin: 0; padding: 0 5px; color: lightgrey; font-size: 0.75em; width: fit-content",o.innerHTML=t;let a=this.createLogCount();n.appendChild(i),n.appendChild(o),n.appendChild(a),this.console.appendChild(n),n.scrollIntoView(!1)};executeQueue=async e=>{let t=[];for(let n of e)this.queueCompleted=1,this.queueTotal=0,Array.isArray(n.message)?this.queueTotal=n.message.length:"object"==typeof n.message&&(this.queueTotal=Object.keys(n.message).length),"error"==n.type?(n.message='<i class="fa-solid fa-circle-exclamation"></i> '+n.message,await this.appendErrors(n.message,n.url,n.line,n.col,n.error,n.stack)):"log"==n.type?("object"==typeof n.message&&n.message instanceof Element?(n.message=n.message.cloneNode(!0),t.push(n.message)):t.push(await this.parse.message(n.message)),await this.appendLogs(t[t.length-1],n.stack)):"warn"==n.type&&(n.message='<i class="fa-solid fa-triangle-exclamation"></i> '+n.message,await this.appendWarns(n.message,n.stack));return t};duplicateLog=e=>{if(this.console.lastChild){const t=this.console.lastChild.children[0];if(t.textContent==e.textContent||t.innerHTML==e){let e=this.console.lastChild.lastChild;return""==e.innerHTML||"1"==e.innerHTML?(e.innerHTML=2,e.style.display="block"):e.innerHTML=Number(e.innerHTML)+1,this.console.lastChild.scrollIntoView(!1),!0}return!1}return!1};createMessage=function(){let e=document.createElement("div");return e.style="\n      position: relative; \n      margin: 0; padding: 10px; \n      border: 1px solid white; \n      color: white;\n      max-width; 100%;",e};createMessageText=function(e,t="white"){let n=document.createElement("p");return n.style=` \n    margin: 0; padding: 5px 0; color: ${t}; word-wrap: break-word; height: auto; overflow: hidden;`,e instanceof Element?n.appendChild(e):n.innerHTML=e,n.addEventListener("contextmenu",(e=>{if(e.preventDefault(),navigator.clipboard.writeText(n.textContent),document.getElementById("copy-alert"))return;let t=document.createElement("div");return t.id="copy-alert",t.style="\n          position: fixed;\n          top: 10px;\n          left: 43%;\n          background-color: lightgrey;\n          color: black;\n          padding: 15px 25px;\n        ",t.innerHTML="Text copied to clipboard",setTimeout((()=>{t.remove()}),1e3),document.body.appendChild(t),!1})),n};createSpan=async(e,t="white")=>{e=(e=e.toString().replaceAll("<br>","\r\n")).toString().replaceAll("&nbsp;"," ");const n=document.createElement("span");return n.style=`color: ${t}; white-space: pre-line;`,n.textContent=e,n};parse={message:async e=>{let t=e;return t=Array.isArray(e)?await this.parse.array(e):"object"==typeof e?await this.parse.object(e):"string"==typeof e?await this.parse.string(e):"number"==typeof e?await this.parse.number(e):"boolean"==typeof e?await this.parse.bool(e):await this.parse.plainText(e),t},object:async(e,t=1,n="&nbsp;&nbsp;&nbsp;")=>{const i=await this.createSpan("{<br>");let o=Object.keys(e).length,a=0;for(const[s,r]of Object.entries(e)){for(let e=0;e<t;e++)i.innerHTML+=n;await new Promise((e=>setTimeout(e,0))),2==t&&(a++,this.input.placeholder="Loading... "+a+"/"+o+" Total: "+this.queueCompleted+"/"+this.queueTotal,this.input.disabled=!0,a>=o&&console.log(a+"ads")),i.appendChild(await this.createSpan(s,"#10ad5c")),i.innerHTML+=":&nbsp;",Array.isArray(r)?i.appendChild(await this.parse.array(r,t+1)):"object"==typeof r?i.appendChild(await this.parse.object(r,t+1)):"string"==typeof r?i.appendChild(await this.parse.string(r)):"number"==typeof r?i.appendChild(await this.parse.number(r)):"boolean"==typeof r?i.appendChild(await this.parse.bool(r)):i.appendChild(await this.parse.plainText(r)),Array.isArray(r)?i.innerHTML+="<br>":i.innerHTML+=",<br>",1==t&&this.queueCompleted++}for(let e=0;e<t-1;e++)i.innerHTML+=n;return i.innerHTML+="}",i},array:async(e,t=1,n="&nbsp;&nbsp;&nbsp;")=>{const i=await this.createSpan("[");let o=e.length,a=0;if(t>1){for(let e=0;e<t-1;e++)i.innerHTML=n+i.innerHTML;i.innerHTML="<br>"+i.innerHTML}let s=0;for(const n of e)await new Promise((e=>setTimeout(e,0))),2==t&&(a++,this.input.placeholder="Loading... "+a+"/"+o+" Total: "+this.queueCompleted+"/"+this.queueTotal,this.input.disabled=!0),Array.isArray(n)?i.appendChild(await this.parse.array(n,t+1)):"object"==typeof n?(i.appendChild(await this.parse.object(n,t+1)),i.innerHTML+=",<br>"):"string"==typeof n?i.appendChild(await this.parse.string(n)):"number"==typeof n?i.appendChild(await this.parse.number(n)):"boolean"==typeof n?i.appendChild(await this.parse.bool(n)):i.appendChild(await this.parse.plainText(n)),s++,s<e.length&&"object"!=typeof n&&(i.innerHTML+=",&nbsp;&nbsp;"),1==t&&this.queueCompleted++;if(t>1)if(Array.isArray(e[e.length-1])){i.innerHTML+="<br>";for(let e=0;e<t-1;e++)i.innerHTML+=n;i.innerHTML+="],"}else i.innerHTML+="],&nbsp;&nbsp;";else i.innerHTML+="<br>]";return i},string:async e=>{let t="";return e.includes('"')?t+=`${e}`:t+=`"${e}"`,await this.createSpan(t,"yellow")},number:async e=>await this.createSpan(e,"#e336e0"),bool:async e=>await this.createSpan(e,"#5b6bf5"),plainText:async e=>e[0]?('"'==e[0]&&'"'==e[e.length-1]&&e.length>=3&&(e=e.substring(1,e.length-2)),await this.createSpan(e)):await this.createSpan("Uh oh")};log=e=>{let t=Error().stack;t=t.replace(t.substring(0,t.indexOf(")")),""),t=t.substring(t.indexOf("at"),t.length-1),t=t.replace("a","A"),this.queue.push({message:e,stack:t,type:"log"})};error=function(e,t,n,i,o){if(this.duplicateLog('<i class="fa-solid fa-circle-exclamation"></i> '+e))return;let a=Error().stack;a=a.replace(a.substring(0,a.indexOf(")")),""),a=a.substring(a.indexOf("at"),a.length-1),a=a.replace("a","A"),this.queue.push({message:e,url:t,line:n,col:i,error:o,stack:a,type:"error"})};clear=()=>{this.console.textContent=""};warn=e=>{if(this.duplicateLog('<i class="fa-solid fa-triangle-exclamation"></i> '+e))return;let t=Error().stack;t=t.replace(t.substring(0,t.indexOf(")")),""),t=t.substring(t.indexOf("at"),t.length-1),t=t.replace("a","A"),this.queue.push({message:e,stack:t,type:"warn"})};draggable=()=>{let e=this.consoleContainer;e.addEventListener("mousedown",(function(t){if(t.clientX>Number(e.getBoundingClientRect().x)+e.offsetWidth-20||t.clientY>Number(e.getBoundingClientRect().y)+e.offsetHeight-20)return;let n=t.clientX-parseInt(window.getComputedStyle(this).left),i=t.clientY-parseInt(window.getComputedStyle(this).top);function o(t){(t.clientX+20<Number(e.getBoundingClientRect().x)+e.offsetWidth||t.clientY+20<Number(e.getBoundingClientRect().y)+e.offsetHeight)&&(e.style.top=t.clientY-i+"px",e.style.left=t.clientX-n+"px")}window.addEventListener("mousemove",o),window.addEventListener("mouseup",(function e(){window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",e)}))}))}}