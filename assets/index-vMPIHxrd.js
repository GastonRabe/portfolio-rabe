const __vite__fileDeps=["assets/ColorUpdater-CJ2xg77Y.js","assets/index-DliDfZjI.js","assets/index-2osjhTP6.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as e}from"./index-DliDfZjI.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-CJ2xg77Y.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
