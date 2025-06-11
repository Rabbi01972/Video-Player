function getparam(a, e) {
  return e || (e = window.location.href), new URL(e).searchParams.get(a)
}
const s = (a) => document.getElementById(a)

function getIdFromUrl(url) {
  return url.match(/[-\w]{25,}/)
}
const apikey = [
  "AIzaSyCt3DULzE2trDJhfFUosWZT-3GEObbMqVU",
  "AIzaSyCsbx8BSyLwkw6XX6Lg5OF1U0HNtI9VmCY",
  "AIzaSyBLMJAT6oqTZxAMsCsMjXzoo4lkJL4MmfM",
  "AIzaSyCIY6fomcJxOt0XQ_naa1rzfd5wlOMGKDY",
][Math.floor(Math.random() * 4)]

const get = () => {
  getbase()
}

const getbase = () => {
  const ply = []
  ply.id = getIdFromUrl(s("videourl").value)
  console.log(ply)

  var arr = JSON.stringify(Object.assign({}, ply))
  console.log(btoa(arr))
  window.base = btoa(arr)
  iframe()
  return btoa(arr)
}

let base
//Player Openers
const openjw = () => {
  window.open("jwplayer.html?id=" + base)
}
const openplyr = () => {
  window.open("plyr.html?id=" + base)
}
const openfluid = () => {
  window.open("fluid.html?id=" + base)
}
const openafterglow = () => {
  window.open("afterglow.html?id=" + base)
}
const openmediaelements = () => {
  window.open("mediaelements.html?id=" + base)
}
const openvlitejs = () => {
  window.open("vlitejs.html?id=" + base)
}

const pmsg = "Copy Embed Code"
//Player Embedders
const embedjw = () => {
  prompt(
    pmsg,
    `<iframe width="560" height="315" 
scrolling="no"
src="jwplayer.html?id=${base}" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture" allowfullscreen>
</iframe>`,
  )
}
const embedplyr = () => {
  prompt(
    pmsg,
    `<iframe width="560" height="315" 
scrolling="no"
src="plyr.html?id=${base}" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture" allowfullscreen>
</iframe>`,
  )
}
const embedfluid = () => {
  prompt(
    pmsg,
    `<iframe width="560" height="315" 
scrolling="no"
src="fluid.html?id=${base}" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture" allowfullscreen>
</iframe>`,
  )
}
const embedafterglow = () => {
  prompt(
    pmsg,
    `<iframe width="560" height="315" 
scrolling="no"
src="afterglow.html?id=${base}" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture" allowfullscreen>
</iframe>`,
  )
}
const embedmediaelements = () => {
  prompt(
    pmsg,
    `<iframe width="560" height="315" 
scrolling="no"
src="mediaelements.html?id=${base}" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture" allowfullscreen>
</iframe>`,
  )
}
const embedvlitejs = () => {
  prompt(
    pmsg,
    `<iframe width="560" height="315" 
scrolling="no"
src="vlitejs.html?id=${base}" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture" allowfullscreen>
</iframe>`,
  )
}

// Update the iframe function
const iframe = () => {
  s("jwplayer").src = "jwplayer.html?id=" + base
  s("afterglow").src = "afterglow.html?id=" + base
  s("fluid").src = "fluid.html?id=" + base
  s("plyr").src = "plyr.html?id=" + base
  s("vlitejs").src = "vlitejs.html?id=" + base
  s("mediaelements").src = "mediaelements.html?id=" + base
}
