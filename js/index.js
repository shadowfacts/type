let prevRepoList = $("#prev-repos");

localforage.keys()
	.then((keys) => {
		return keys.filter((el) => {
			return el != "theme";
		});
	})
	.then((repos) => {
		repos.forEach((el) => {
			let li = $("<li></li>");
			let a = $("<a></a>");
			a.attr("href", `/repo.html#${el}`);
			let div = $("<div></div>");
			div.text(el);
			a.append(div);
			li.append(a);
			prevRepoList.append(li);
		});
	})
	.catch((e) => {
		throw e;
	});

$("#form").submit((event) => {
	event.preventDefault();

	let repo = $("#repo").val();
	let branch = $("#branch").val();

	localforage.setItem(`${repo}/${branch}`, {})
		.then(() => {
			window.location.href = `/repo.html#${repo}/${branch}`;
		})
		.catch((e) => {
			throw e;
		});
});
