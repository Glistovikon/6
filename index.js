const url = 'https://api.quotable.io/random'

function getQ(urlId) {
	fetch(urlId)
		.then(response => response.json())
		.then(data => displayQ(data))
}

function displayQ(data) {
	$('.quote h2').text(data.content)
	$('.author p').text(data.author)
}

$('button').click(() => {
	fetch(url)
		.then(response => response.json())
		.then(data => displayQ(data))
})

getQ(url)
