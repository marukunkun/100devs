$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/emoji?name=flag',
    headers: { 'X-Api-Key': 'hRqfksl9oTaI4hhTYO+/pQ==zvXRz1PhwiYgEBEF'},
    contentType: 'application/json',
    success: function(data) {

        // randomize number between 13 and 29 (include) 
        // in order to select between 30 response from the flagAPI
        let random = function random() {
            return Math.floor(Math.random() * (29 - 13 + 1)) + 13
        }
        let i = random()

        // get the flat emoji
        document.getElementById('flag').innerText = data[i].character
        // get the name of the flag
        document.getElementById('name').innerText = data[i].name.split(': ')[1]
        

        // quizCounter
        let count = 0

        // click 'enter' to check Answer
        document.getElementById('response').addEventListener('keypress', function(check) {
            if(check.key === 'Enter') {
                if(document.getElementById('response').value.toLowerCase() === data[i].name.split(': ')[1].toLowerCase()) {
                    console.log('Good!')
                    count++
                    document.getElementById('goodAnswer') = count
                    document.getElementById('numbQuestion') = count
                    document.getElementById('name').style.color = green
                    document.getElementById('name').classList.toggle('hidden')
                } else {
                    count++
                    document.getElementById('numbQuestion') = count
                    document.getElementById('name').style.color = red
                    document.getElementById('name').classList.toggle('hidden')
                }
            }
        })
        

        // click 'n' for new request to the flagAPI
        window.addEventListener('keypress', function(next) {
            if(next.key === 'n') {
                $.ajax({
                    method: 'GET',
                    url: 'https://api.api-ninjas.com/v1/emoji?name=flag',
                    headers: { 'X-Api-Key': 'hRqfksl9oTaI4hhTYO+/pQ==zvXRz1PhwiYgEBEF' },
                    contentType: 'application/json',
                    success: function(data) {

                        let random = function random() {
                            return Math.floor(Math.random() * (29 - 13 + 1)) + 13
                        }
                        let i = random()

                        document.getElementById('flag').innerText = data[i].character
                        document.getElementById('name').innerText = data[i].name.split(': ')[1]

                    },
                    error: function(xhr, status, error) {
                        console.log("Error:", error);
                    }
                });
            }
        }
        
    )},
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText)
    }
})



// ANSWERS
//  good : color green
//  bad : color red

// work on the counter