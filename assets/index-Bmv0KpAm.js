const __vite__fileDeps=["assets/Pauser-DNnHNTke.js","assets/ExternalInteractorBase-CIi3zRdK.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as n}from"./index-c3KSP10K.js";async function i(a,t=!0){await a.addInteractor("externalPause",async e=>{const{Pauser:r}=await n(()=>import("./Pauser-DNnHNTke.js"),__vite__mapDeps([0,1]));return new r(e)},t)}export{i as loadExternalPauseInteraction};
