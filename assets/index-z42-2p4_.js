const __vite__fileDeps=["assets/SizeUpdater-gI7Ybltr.js","assets/index-c3KSP10K.js","assets/index-BvXunV_K.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as r}from"./index-c3KSP10K.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-gI7Ybltr.js"),__vite__mapDeps([0,1,2]));return new e},a)}export{o as loadSizeUpdater};
