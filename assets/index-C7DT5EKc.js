const __vite__fileDeps=["assets/Attractor-B6FIwxCV.js","assets/ParticlesInteractorBase-vfDeBun3.js","assets/index-DliDfZjI.js","assets/index-2osjhTP6.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as c}from"./index-DliDfZjI.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-B6FIwxCV.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
