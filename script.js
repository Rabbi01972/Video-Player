function getparam(a,e){return e||(e=window.location.href),new URL(e).searchParams.get(a)}
let s=a=>document.getElementById(a);


function getIdFromUrl(url) { return url.match(/[-\w]{25,}/); }
let apikey = 'AIzaSyD739-eb6NzS_KbVJq1K8ZAxnrMfkIqPyw';

let get=()=>{
  getbase();
}
let getbase=()=>{
    let ply = [];
  
    ply.id =  getIdFromUrl(s('videourl').value);
      
    console.log(ply);
  
    var arr = JSON.stringify(Object.assign({}, ply))
    console.log(btoa(arr));
    window.base =btoa(arr);
    iframe();
    return btoa(arr);
}


//Player Openers (diff. func. coding intentionally)
let opensp=()=> { window.open('./sopplayer.html?id='+base)}
let openplyr=()=> { window.open('./plyr.html?id='+base)}
let openfluid=()=> { window.open('./fluid.html?id='+base)}
let openafterglow=()=> { window.open('./afterglow.html?id='+base)}
let openmediaelements=()=> { window.open('./mediaelements.html?id='+base)}
let openvlitejs=()=> { window.open('./vlitejs.html?id='+base)}


let pmsg = 'Copy Embed Code' ;
//Player Embedders
let embedsp=()=> {
  const currentDomain = window.location.origin + window.location.pathname.replace('/index.html', '').replace('/', '');
  prompt(pmsg,`<iframe width="560" height="315" 
scrolling="no"
src="${currentDomain}/sopplayer.html?id=${base}" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture" allowfullscreen>
</iframe>`)
}
let embedplyr=()=> {
  const currentDomain = window.location.origin + window.location.pathname.replace('/index.html', '').replace('/', '');
  prompt(pmsg,`<iframe width="560" height="315" 
scrolling="no"
src="${currentDomain}/plyr.html?id=${base}" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture" allowfullscreen>
</iframe>`)
}
let embedfluid=()=> {
  const currentDomain = window.location.origin + window.location.pathname.replace('/index.html', '').replace('/', '');
  prompt(pmsg,`<iframe width="560" height="315" 
scrolling="no"
src="${currentDomain}/fluid.html?id=${base}" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture" allowfullscreen>
</iframe>`)
}
let embedafterglow=()=> {
  const currentDomain = window.location.origin + window.location.pathname.replace('/index.html', '').replace('/', '');
  prompt(pmsg,`<iframe width="560" height="315" 
scrolling="no"
src="${currentDomain}/afterglow.html?id=${base}" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture" allowfullscreen>
</iframe>`)
}
let embedmediaelements=()=> {
  const currentDomain = window.location.origin + window.location.pathname.replace('/index.html', '').replace('/', '');
  prompt(pmsg,`<iframe width="560" height="315" 
scrolling="no"
src="${currentDomain}/mediaelements.html?id=${base}" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture" allowfullscreen>
</iframe>`)
}
let embedvlitejs=()=> {
  const currentDomain = window.location.origin + window.location.pathname.replace('/index.html', '').replace('/', '');
  prompt(pmsg,`<iframe width="560" height="315" 
scrolling="no"
src="${currentDomain}/vlitejs.html?id=${base}" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture" allowfullscreen>`);
}



let iframe=()=> {
  s('afterglow').src= './afterglow.html?id='+base;
  s('fluid').src='./fluid.html?id='+base;
  s('plyr').src='./plyr.html?id='+base;

  s('vlitejs').src='./vlitejs.html?id='+base;
  s('mediaelements').src='./mediaelements.html?id='+base;
  
    s('sopplayer').src='./sopplayer.html?id='+base;
  
}
