let hash = window.location.hash.substring(1);

let hashBits = hash.split("/");
let repo = hashBits.slice(0, 3).join("/");
let repoName = hashBits.slice(0, 2).join("/");
let file = hashBits[hashBits.length - 1];

$("#congrats").html(`Congratulations, you've completed <code>${file}</code> in <code>${repoName}</code>!`);

$("#repo").attr("href", `/repo.html#${repo}`);

$("#back").click(() => {
	window.location.href = `/type.html#${hash}`;
});
