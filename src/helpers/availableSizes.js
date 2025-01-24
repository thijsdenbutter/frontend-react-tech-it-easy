function inchesToCM (inch) {
    return Math.round(inch * 2.54);
}

function availableSizes (availableSizes) {
    let sizesInInchAndCmFormat = "";
    for (let i = 0; i < availableSizes.length; i++) {

        if(i > 0){
            sizesInInchAndCmFormat += " | ";
        }

        sizesInInchAndCmFormat += `${availableSizes[i]} inch (${inchesToCM(availableSizes[i])})`;
    }
    return sizesInInchAndCmFormat;
}

export default availableSizes;


