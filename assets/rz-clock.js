class h extends HTMLElement{constructor(){super(),this.clock_width="300",this.timezone="Europe/Berlin",this.format="de-DE",this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["clock_width","timezone","format","title"]}attributeChangedCallback(e,t,i){this.render()}render(){const e=this.getAttribute("title")||`${this.title}`;this.shadowRoot.innerHTML=this.getStyle(),this.shadowRoot.innerHTML+=`<div class="rz_clock"><div class="rz_title">${e}</div>`,this.shadowRoot.innerHTML+='<div class="Clock"><div class="hour"><div class="hr" id="hr"></div></div><div class="minute"><div class="min" id="min"></div></div><div class="second"><div class="sec" id="sec"></div></div></div>',this.shadowRoot.innerHTML+="</div>";const t=6,i=this.shadowRoot.querySelector("#hr"),o=this.shadowRoot.querySelector("#min"),n=this.shadowRoot.querySelector("#sec");setInterval(()=>{const s=this.getDateTime().split(":");let c=s[0]*30,r=s[1]*t,d=s[2]*t;i.style.transform=`rotateZ(${c+r/12}deg)`,o.style.transform=`rotateZ(${r}deg)`,n.style.transform=`rotateZ(${d}deg)`})}getDateTime(){const e=this.getAttribute("format")||`${this.format}`,t=this.getAttribute("timezone")||`${this.timezone}`;return this.options={hour:"numeric",minute:"numeric",second:"numeric",hour12:!1,timeZone:t},new Intl.DateTimeFormat(e,this.options).format(this.currentDate)}getStyle(){const e=this.getAttribute("clock_width")||"300",t=this.getAttribute("clock_width")/1.4||"100",i=this.getAttribute("clock_width")/1.4||"100",o=this.getAttribute("clock_width")/1.4||"100";return`<style>
.rz_title {
width: 100%;
text-align: center;
}

    .Clock {
  width: ${e}px;
  height: ${e}px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(img/rz-clock_bg.jpg);
  background-size: cover;
  border: 6px solid #3ac7e0;
  border-radius: 20px;
  box-shadow: 0 -15px 15px rgba(255, 255, 255, 0.05),
    inset 0 -15px 15px rgba(255, 255, 255, 0.05), 0 15px 15px rgba(0, 0, 0, 0.3),
    inset 0 15px 15px rgba(0, 0, 0, 0.3);
}
.Clock:before {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  background: #fff;
  border-radius: 50%;
  z-index: 10000;
}
.Clock .hour,
.Clock .minute,
.Clock .second {
  position: absolute;
}
.Clock .hour,
.hr {
  width: ${t}px;
  height: ${t}px;
}
.Clock .minute,
.min {
  width: ${i}px;
  height: ${i}px;
}
.Clock .second,
.sec {
  width: ${o}px;
  height: ${o}px;
}
.hr,
.min,
.sec {
  display: flex;
  justify-content: center;
  /*align-items: center;*/
  position: absolute;
  border-radius: 50%;
}
.hr:before {
  content: "";
  position: absolute;
  width: 8px;
  height: 80px;
  background: #ff10a3;
  z-index: 10;
  border-radius: 6px 6px 0 0;
}
.min:before {
  content: "";
  position: absolute;
  width: 4px;
  height: 90px;
  background: rgb(26, 219, 245);
  z-index: 11;
  border-radius: 6px 6px 0 0;
}
.sec:before {
  content: "";
  position: absolute;
  width: 2px;
  height: 90px;
  background: rgb(248, 233, 15);
  z-index: 12;
  border-radius: 6px 6px 0 0;
}
  </style>
`}}customElements.define("rz-clock",h);
