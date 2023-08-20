const getColor = () =>{
    // hex Code 
    const randomNumber= Math.floor(Math.random()*167725);
    const randomColor= '#' + randomNumber.toString(16);

    // hex code display
    document.getElementById(`color-code`).innerHTML=randomColor;
 
    // Color display
    document.body.style.backgroundColor=randomColor;

    // for having a copy of  the hex color code
    navigator.clipboard.writeText(randomColor)
}


// event call
document.getElementById(`btn`).addEventListener(
    `click`,
    getColor
)

//init call
getColor

