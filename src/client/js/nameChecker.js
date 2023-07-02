function checkForName(inputText) {
    if (inputText == "") {
        alert("Please, provide a valid URL");
        return false
    } else {
        return true
    }
}

export { checkForName }
