import images from "/portfolio.json" assert {type: 'json'};
import sheet from "/style.css" assert { type: "css" };
document.adoptedStyleSheets = [sheet];

/* console.log(images.images) */

var fimg = images.images

var nuevo = fimg.map(function(item, i){
    var nitem = {}
    nitem[item.url] = item.url
    /* console.log(item) */
    return nitem
})


var obj = fimg
var result = Object.keys(obj).map((key) => [Number(key), obj[key]]);

var styles = {}

for(let i=0; i < result.length; i++){

    /* console.log(result[i][1].url) */

    styles = {
        ".img1,\n.img2,\n.img3,\n.img4,\n.img5,\n.img6,\n.img7,\n.img8,\n.img9,\n.img10,\n.img11,\n.img12,\n.img13,\n.img14,\n.img15": {
            "position": "relative;",
            "opacity": "1.0;",
            "background-position": "center;",
            "background-repeat": "no-repeat;",
            "background-size": "cover;",
            "overflow": "hidden;"
        },
        ".img1": {
            "background-image": "url(" + result[0][1].url + ");",
            "height": "100%;"
        },
        ".img2": {
            "background-image": "url(" + result[1][1].url + ");",
            "height": "100%;"
        }, 
        ".img3": {
            "background-image": "url(" + result[2][1].url + ");",
            "height": "100%;",
            "align-content": "center;",
            "text-align": "center;",
            "display": "grid;",
            "grid-template-columns": "33.3% 33.3% 33.3%;",
            "grid-template-rows": "auto;",
            "gap": "10px;"
        },
        ".img4": {
            "background-image": "url(" + result[3][1].url + ");",
            "height": "100%;",
            "align-content": "center;",
            "text-align": "center;",
            "display": "grid;",
            "grid-template-columns": "32.3% 28.3% 25.3%;",
            "grid-template-rows": "auto;",
            "gap": "10px;",
            "align-items": "center;"
        },
        ".img5": {
            "background-image": "url(" + result[4][1].url + ");",
            "height": "100%;",
            "align-content": "center;",
            "text-align": "center;",
            "display": "grid;",
            "grid-template-columns": "33.3% 33.3% 33.3%;",
            "grid-template-rows": "200px auto;",
            "gap": "10px;"
        },
        ".img6": {
            "background-image": "url(" + result[5][1].url + ");",
            "height": "100%;"
        },
        ".img7": {
            "background-image": "url(" + result[6][1].url + ");",
            "height": "100%;"
        },
        ".img8": {
            "background-image": "url(" + result[7][1].url + ");",
            "height": "100%;"
        },
        ".img9": {
            "background-image": "url(" + result[8][1].url + ");",
            "height": "100%;"
        },
        ".img10": {
            "background-image": "url(" + result[9][1].url + ");",
            "height": "100%;"
        },
        ".img11": {
            "background-image": "url(" + result[10][1].url + ");",
            "height": "100%;"
        },
        ".img12": {
            "background-image": "url(" + result[11][1].url + ");",
            "height": "100%;"
        },
        ".img13": {
            "background-image": "url(" + result[12][1].url + ");",
            "height": "100%;"
        },
        ".img14": {
            "background-image": "url(" + result[13][1].url + ");",
            "height": "100%;"
        },
        ".img15": {
            "background-image": "url(" + result[14][1].url + ");",
            "height": "100%;"
        },
    };

}

var newStyle = document.createElement('style');
HTMLStyleElement.type = "text/css";
newStyle.appendChild(document.createTextNode(styleCSS()));

document.querySelector(".img3").appendChild(newStyle);

function styleCSS() {
  var css = [];
  for (let selector in styles) {
    let style = selector + " {";
    
    for (let prop in styles[selector]) {
      style += prop + ":" + styles[selector][prop];
    }
    
    style += "}";
    
    css.push(style);
  }
  
  return css.join("\n");
}