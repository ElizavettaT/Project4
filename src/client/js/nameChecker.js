function checkForName(inputText) {
    // console.log("::: Running checkForName :::", inputText);
    // let names = [
    //     "Picard",
    //     "Janeway",
    //     "Kirk",
    //     "Archer",
    //     "Georgiou"
    // ]

    // if(names.includes(inputText)) {
    //     alert("Welcome, Captain!")
    // }
    if (inputText == "") {
        alert("Please, provide a valid URL");
        return false
    } else {
        return true
    }
}

export { checkForName }
