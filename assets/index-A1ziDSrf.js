const __vite__fileDeps=["assets/ParallaxMover-mT7_ICPx.js","assets/index-c3KSP10K.js","assets/index-BvXunV_K.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as t}from"./index-c3KSP10K.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-mT7_ICPx.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};
