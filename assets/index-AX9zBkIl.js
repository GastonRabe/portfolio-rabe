const __vite__fileDeps=["assets/OutOfCanvasUpdater-BIO-8PuA.js","assets/index-DliDfZjI.js","assets/index-2osjhTP6.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as o}from"./index-DliDfZjI.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-BIO-8PuA.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};
