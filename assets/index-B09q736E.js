const __vite__fileDeps=["assets/ColorUpdater-CyM4qwOD.js","assets/index-oGkMS44t.js","assets/index-2osjhTP6.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as e}from"./index-oGkMS44t.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-CyM4qwOD.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
