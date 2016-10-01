$("#form").submit((event) => {
	event.preventDefault();

	let repo = $("#repo").val();
	let branch = $("#branch").val();
	let file = $("#file").val();
	window.location.href = `/type.html#${repo}/${branch}/${file}`;
});
