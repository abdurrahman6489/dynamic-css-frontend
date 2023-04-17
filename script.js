let color="red";
let fontSize = 55;
let textDecoration = "none";  //underline
let fontStyle = "none"; //italic
let fontWeight = "";  //bold
let fontFamily = ["serif","sans-serif","monospace","cursive","fantasy"]; //example - sans-serif
let selectedFont = "";
function showProperties(id, correctId="getstyle"){
    const getProperties = document.getElementById("css-props");
    if(id=correctId){
        fontSize = document.getElementById("fontsize").value;
        getProperties.innerHTML = `
        color: ${color}; font-size: ${fontSize}px; text-decoration: ${textDecoration}; font-style: ${fontStyle}; font-weight: ${fontWeight}; font-family: ${fontFamily}`;
    }
    else getProperties.innerHTML = "";
}
function showText(property,value){
    const text = document.getElementById("text-container");
    text.style[property] = value;
}
// showText("fontFamily",fontFamily);
document.getElementById("colorchange").addEventListener("click",()=>{
    const inputColor = document.getElementById("colorbox").value;
    color = inputColor;
    showText("color",color);
})
document.getElementById("fontsize").addEventListener("input",(e)=>{
    const inputFontSize = parseInt(e.currentTarget.value);
    fontSize = inputFontSize;
    document.getElementById("colorbox").value = fontSize;
    showText("fontSize",fontSize+"px");
})
document.getElementById("underline").addEventListener("click",()=>{
    textDecoration = "underline";
    // showText("textDecoration",textDecoration);
    document.getElementById("text-container").classList.toggle("underline");
})
document.getElementById("italic").addEventListener("click",()=>{
    fontStyle = "italic"
    // showText("fontStyle",fontStyle);
    document.getElementById("text-container").classList.toggle("italic");
})
document.getElementById("bold").addEventListener("click",()=>{
    fontWeight = "bold";
    // showText("fontWeight",fontWeight);
    document.getElementById("text-container").classList.toggle("bold");
})

// showText("fontFamily","fantasy");
document.getElementById("list").addEventListener("change",(e)=>{
    let selectedIndex = e.currentTarget.options.selectedIndex;
    selectedFont = fontFamily[selectedIndex];
    showText("fontFamily",selectedFont);
})
document.getElementById("getstyle").addEventListener("click",(e)=>{
    showProperties(e.currentTarget.id);
})