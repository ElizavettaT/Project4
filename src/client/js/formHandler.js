function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let article = document.getElementById('article').value
    //Client.checkForName(article)
    if (Client.checkForName(article)) {
        fetch('http://localhost:8081/nlp', { method: 'GET', headers: { article: article } })
            .then(res => res.json())
            .then(function (res) {
                // console.log("Response received from backend: ", res)
                document.getElementById('results').innerHTML = JSON.stringify(res)
            })
    }
}
export { handleSubmit }
