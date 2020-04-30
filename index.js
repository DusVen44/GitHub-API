function getUserRepos() {
    let searchInput = $("#input").val();
    let baseURL = "https://api.github.com/users/" + searchInput + "/repos";
    fetch(baseURL) 
        .then(response => {
            if (response.ok) {
                return response.json();
            } throw new Error(response.statusText);
        })
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert("Something went wrong"));
    }

function submitForm() {
    $("form").submit(function(event) {
        event.preventDefault();
        getUserRepos();
    })
}

function displayResults(responseJson) {
    $(".results-list").empty();
    console.log(responseJson);
    for (let i=0; i<responseJson.length; i++) {
        $(".results-list").append(
            `<li><h2>${responseJson[i].name}</h2>
            <h3><a href="${responseJson[i].html_url}" target="_blank">${responseJson[i].html_url}</a></h3>
             </li>`
        )
    };
    $("#results").removeClass("hidden");
}


// getUserRepos()
submitForm()