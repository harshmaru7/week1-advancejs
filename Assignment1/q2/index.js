 
var queried = window. prompt("Enter your query: "); 
fetch(`https://api.github.com/search/repositories?q=${queried}`)
.then(function (response) {
    return response.json();
})
.then(function (data) {
insightData(data);
})
.catch(function (err) {
console.log('error: ' + err);
});
    async function insightData(data){
    post = data
	console.log(post.items.length)
    for (let j = 1; j < post.items.length; j++) {
		await fetch(`${post.items[j].owner.url}`).then(function (response) {
		if (response.ok) {
			return response.json();
		 } //else {
		// 	return Promise.reject(response);
		// }
		}).then(function (FData) {
		console.log("i :" +j);
		console.log("follower" +FData.followers);
		Followers = FData.followers;
		Following = FData.following;
		oname = FData.name;
		var l = post.items[j].license; 
		let str = post.items[j].branches_url;
		str = str.slice(0,- 9);
	    return fetch(str);
			}).then(function (response) {
				if (response.ok) {
					return response.json();
				} else {
					return Promise.reject(response);
				}
			}).then(function (BData) {
				BranchD = BData
				console.log("Name: " +post.items[j].name)
                console.log("Full Name: " +post.items[j].full_name)
				console.log("Private: " + post.items[j].private)
				console.log("Login: " + post.items[j].owner.login)
				console.log("Owner Name: "+ oname)
				console.log("Followers: "+Followers)
				console.log("Following: "+Following)
                console.log("License:" +post.items[j].license)
                console.log("Score: " +post.items[j].score)
				console.log("Branches: " +BData.length); 
				
				const start = document.createElement("p");
				start.innerText = `{`;
				const charactersDiv = document.querySelector("#mydata");
				const name = document.createElement("p");
				name.innerText = `Name: ${post.items[j].name}`;
				const fullname = document.createElement("p");
				fullname.innerText = `Full Name: ${post.items[j].full_name}`;
				const private = document.createElement("p");
				private.innerText = `Private: ${post.items[j].private}`;
				const login = document.createElement("p");
				login.innerText = `Login: ${post.items[j].owner.login}`;
				const ownername = document.createElement("p");
				ownername.innerText = `Owner Name: ${oname}`;
				const followers = document.createElement("p");
				followers.innerText = `Followers: ${Followers}`;
				const following = document.createElement("p");
				following.innerText = `Followers: ${Following}`;
				const license = document.createElement("p");
				license.innerText = `License: ${post.items[j].license.name}`;
				const score = document.createElement("p");
				score.innerText = `Score: ${post.items[j].score}`;
				const branches = document.createElement("p");
				branches.innerText = `Branches: ${BData.length}`;
				const end = document.createElement("p");
				end.innerText = `}`;

				charactersDiv.append(start)
				charactersDiv.append(name);
				charactersDiv.append(fullname);
				charactersDiv.append(private);
				charactersDiv.append(login);
				charactersDiv.append(ownername);
				charactersDiv.append(followers);
				charactersDiv.append(following);
				charactersDiv.append(license);
				charactersDiv.append(score);
				charactersDiv.append(branches);
				charactersDiv.append(end)
				

		}).catch(function (error) {
		console.warn(error);
		});	
	
    }   
}