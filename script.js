function getparam(a, e) {
  return e || (e = window.location.href), new URL(e).searchParams.get(a)
}
const s = (a) => document.getElementById(a)

function getIdFromUrl(url) {
  return url.match(/[-\w]{25,}/)
}
const apikey = ['AIzaSyCt3DULzE2trDJhfFUosWZT-3GEObbMqVU', 'AIzaSyCsbx8BSyLwkw6XX6Lg5OF1U0HNtI9VmCY', 'AIzaSyBLMJAT6oqTZxAMsCsMjXzoo4lkJL4MmfM', 'AIzaSyCIY6fomcJxOt0XQ_naa1rzfd5wlOMGKDY'][Math.floor(Math.random() * 4)]

// Initialize JWPlayer with default content
let jwPlayerInstance = null;

document.addEventListener('DOMContentLoaded', function() {
  // Initialize JWPlayer
  jwPlayerInstance = jwplayer("jwplayer-container");
  jwPlayerInstance.setup({
    file: "https://bit.ly/bbsamplevideo",
    image: "https://bit.ly/bbsampleposter",
    width: "100%",
    aspectratio: "16:9",
    stretching: "uniform",
    primary: "html5",
    hlshtml: true,
    preload: "metadata",
    autostart: false
  });
});

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
  updateJWPlayer()
  return btoa(arr)
}

// Update JWPlayer with the new video
function updateJWPlayer() {
  if (!jwPlayerInstance) return;
  
  if (window.base) {
    let json = JSON.parse(atob(window.base));
    let driveid = json.id;
    let videoUrl = `https://www.googleapis.com/drive/v3/files/${driveid}?alt=media&key=${apikey}`;
    let posterUrl = s('posterurl').value || `https://lh3.googleusercontent.com/d/${driveid}`;
    
    jwPlayerInstance.setup({
      file: videoUrl,
      image: posterUrl,
      width: "100%",
      aspectratio: "16:9",
      stretching: "uniform",
      primary: "html5",
      hlshtml: true,
      preload: "metadata",
      autostart: false,
      title: s('videotitle').value || "Video"
    });
  }
}

let base
//Player Openers (diff. func. coding intentionally)
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

// Open JWPlayer in a new window with a standalone player
const openjw = () => {
  // Create a simple HTML page with JWPlayer
  const jwPlayerHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>JWPlayer - DrivePlyr</title>
  <script src="https://cdn.jwplayer.com/libraries/lqsWlr4Z.js"></script>
  <style>
    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
      overflow: hidden;
    }
    #jwplayer-container {
      width: 100%;
      height: 100%;
    }
  </style>
</head>
<body>
  <div id="jwplayer-container"></div>
  <script>
    var apikey = '${apikey}';
    function getparam(a,e){return e||(e=window.location.href),new URL(e).searchParams.get(a)}
    
    var playerInstance = jwplayer("jwplayer-container");
    
    if(getparam('id')){
      let json = JSON.parse(atob(getparam('id')));
      let driveid = json.id;
      let videoUrl = \`https://www.googleapis.com/drive/v3/files/\${driveid}?alt=media&key=\${apikey}\`;
      let posterUrl = \`https://lh3.googleusercontent.com/d/\${driveid}\`;
      
      playerInstance.setup({
        file: videoUrl,
        image: posterUrl,
        width: "100%",
        height: "100%",
        stretching: "uniform",
        primary: "html5",
        hlshtml: true,
        preload: "metadata",
        autostart: false
      });
    }
  </script>
</body>
</html>
  `;
  
  // Open a new window with the JWPlayer HTML
  const newWindow = window.open('', '_blank');
  newWindow.document.write(jwPlayerHTML);
  newWindow.document.close();
  
  // Set the URL parameter
  const url = new URL(newWindow.location);
  url.searchParams.set('id', base);
  newWindow.history.replaceState({}, '', url);
  
  // Initialize the player in the new window
  newWindow.onload = function() {
    const script = newWindow.document.createElement('script');
    script.textContent = `
      var json = JSON.parse(atob("${base}"));
      var driveid = json.id;
      var videoUrl = "https://www.googleapis.com/drive/v3/files/" + driveid + "?alt=media&key=${apikey}";
      var posterUrl = "https://lh3.googleusercontent.com/d/" + driveid;
      
      jwplayer("jwplayer-container").setup({
        file: videoUrl,
        image: posterUrl,
        width: "100%",
        height: "100%",
        stretching: "uniform",
        primary: "html5",
        hlshtml: true,
        preload: "metadata",
        autostart: true
      });
    `;
    newWindow.document.body.appendChild(script);
  };
}

const pmsg = "Copy Embed Code"
//Player Embedders
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

// JWPlayer embed code
const embedjw = () => {
  // Create a standalone HTML page with JWPlayer
  const embedCode = `<iframe width="560" height="315" 
scrolling="no"
src="https://rabbi01972.github.io/Video-Player/jwplayer.html?id=${base}" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture" allowfullscreen>
</iframe>`;
  
  prompt(pmsg, embedCode);
}

// Update the iframe function
const iframe = () => {
  s("afterglow").src = "afterglow.html?id=" + base;
  s("fluid").src = "fluid.html?id=" + base;
  s("plyr").src = "plyr.html?id=" + base;
  s("vlitejs").src = "vlitejs.html?id=" + base;
  s("mediaelements").src = "mediaelements.html?id=" + base;
}
