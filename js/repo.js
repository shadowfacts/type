let repo = window.location.hash.substring(1);

$("#repo-title").text(repo);

localforage.getItem(repo)
	.then((val) => {
		for (var f in val) {
			let li = $("<li></li>");
			let a = $("<a></a>");
			a.attr("href", `/type.html#${repo}/${f}`);
			let div = $("<div></div>");
			div.text(f);
			a.append(div);
			li.append(a);
			$("#prev-files").append(li);
		}
	})
	.catch((e) => {
		throw e;
	});

$("#form").submit((event) => {
	event.preventDefault();

	let file = $("#file").val();
	window.location.href = `/type.html#${repo}/${file}`;
});

$("#back").click(() => {
	window.location.href = "/";
});
