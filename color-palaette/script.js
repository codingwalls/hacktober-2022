const colors = [
    ["#FFFFFF", "#E7E7E7", "#D1D1D1", "#B6B6B6", "#9B9B9B"],
    ["#DC8665", "#138086", "#534666", "#CD7672", "#EEB462"],
    ["#E8A49C", "#3C4DAD", "#2D0E8B", "#F04393", "#F9C449"],
    ["#86E3CE", "#D0E6A5", "#FFDD94", "#FA897B", "#CCABD8"],
    ["#F5CEC7", "#E79796", "#FFC9BB", "#FFB284", "#C6C09C"],
    ["#455054", "#308695", "#D45769", "#E69D45", "#D4CFC9"],
    ["#478BA2", "#DE5B6D", "#E9765B", "#F2A490", "#B9D4DB"],
    ["#AAC9CE", "#B6B4C2", "#C9BBCB", "#E5C1CD", "#F3DBCF"],
    ["#7E9680", "#79616F", "#AE6378", "#D87F81", "#EAB595"],
    ["#C6A477", "#ECD59F", "#D3E7EE", "#ABD1DC", "#7097AB"],
    ["#3D5284", "#5BABA0", "#CBE54E", "#94B447", "#5D6E1E"],
    ["#522157", "#8B4C70", "#C2649A", "#E4C7B7", "#E4DFD9"],
    ["#264D59", "#43978D", "#F9E07F", "#F9AD6A", "#D46C46"],
    ["#C73866", "#FE676E", "#FD8F52", "#FFBD71", "#FFDC82"],
    ["#015C92", "#2D82B5", "#52A6D5", "#88CDF6", "#BCE6FF"],
    ["#FF7B89", "#815082", "#6F5F90", "#758EB7", "#A5CAD2"],
    ["#5AA7A7", "#96D7C6", "#BAC94A", "#E2D36B", "#6CBCBF"],
    ["#33539E", "#7FACD6", "#BFBBDA", "#E8B7D4", "#A5678E"],
    ["#DF825F", "#F8956F", "#DFB15B", "#4D446F", "#706695"],
    ["#85CBCC", "#ABDEE0", "#F9E2AE", "#FBC78D", "#A7D676"],
    ["#FF7B89", "#8A5082", "#6F5F90", "#758EB7", "#A5CAD2"],
    ["#47CACC", "#6CBCC9", "#CDB3D4", "#E7B7CB", "#FFBE88"],
    ["#041D2D", "#004E9A", "#428CD4", "#FF9CDA", "#EA4492"],
    ["#2C6975", "#6BB2AA", "#CDE0C9", "#E0ECDE", "#FFFFFF"],
    ["#6AAB9C", "#FA9284", "#E06C78", "#5874DC", "#384E78"],
    ["#4A707A", "#7697A0", "#94B0B7", "#C2CBC5", "#DDDDDA"],
    ["#35BBCC", "#019184", "#F8D90F", "#D3DD18", "#FE7A15"],
    ["#031B88", "#6096FD", "#AAB6FB", "#FB7BBE", "#FAA7BB"],
    ["#205072", "#329D9C", "#56C596", "#7BE495", "#CFF4D2"],
    ["#7BD5F5", "#787FF6", "#4ADEDE", "#1CA7EC", "#1F2F98"],
    ["#0B0742", "#120C6C", "#5672EB", "#FF9190", "#FDC094"],
    ["#FBEEE6", "#FFE5D8", "#FFCAD4", "#F3AB86", "#9F8189"]
]

// Generating Color Palette 
const colors_box = document.querySelector(".colors-box")
const copy_div = document.querySelector(".copied")
var colorstr = ''
var cleartime, ele
colors.forEach(each_palette => {
    colorstr += '<div class="each-palette">'
    each_palette.forEach(each_color => {
        colorstr += ' <div class="each-color">'
        colorstr += '<div class="color" style="background:' + each_color + '" onclick=copy_color(this,"' + each_color + '")></div>'
        colorstr += '<code>' + each_color + '</code>'
        colorstr += ' </div>'
    });
    colorstr += '</div>'
    document.querySelector(".colors-box").innerHTML = colorstr
    start_animation()
});

// Copy color Function 
function copy_color(e, color) {
    document.querySelector("#color_input").value = color
    copyText = document.getElementById("color_input");
    copyText.select();
    document.execCommand('copy')
    copyBoxPos = getCoords(e)
    copy_div.style.left = copyBoxPos.left + "px"
    copy_div.style.top = copyBoxPos.top + "px"
    clearTimeout(cleartime);
    copy_div.classList.remove("visible")
    copy_div.classList.add("visible")
    cleartime = setTimeout(function() {
        copy_div.classList.remove("visible")
    }, 1000)
}

function start_animation() {
    palletes = document.querySelectorAll(".each-palette");
    for (let i = 0; i < palletes.length; i++) {
        setTimeout(function() {
            palletes[i].classList.add("animated");
        }, 70 * i + 70);
    }
}

function getCoords(elem) { // crossbrowser version
    var box = elem.getBoundingClientRect();

    var body = document.body;
    var docEl = document.documentElement;

    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;

    var top = box.top + scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    return { top: top, left: left };
}
