const userName = document.getElementById("username");
const btn = document.getElementById("btn");
const table = document.getElementById("table");

class Request {
    async get(url){ // get request
        const response = await fetch(url); // response objesi

        const responseData = await response.json(); // json objesi
        return responseData;

        // buradan sonra then ve catch ile yakalayabilirim
    }
}

const request = new Request();

btn.addEventListener("click", function(e) {
    let val = userName.value;
    request.get(`https://www.instagram.com/web/search/topsearch/?query={${val}}`).then((result) => {
        for (index = 1; index < result.users.length; index++) {
            let tbl = document.createElement("tr");
            let tbl1 = document.createElement("td");
            tbl1.innerHTML = result.users[index].user.username;
            let tbl2 = document.createElement("td");
            tbl2.innerHTML = result.users[index].user.full_name;
            tbl.appendChild(tbl1);
            tbl.appendChild(tbl2);
            document.getElementById("table").appendChild(tbl);
        }

        let p = document.createElement("p");
        p.innerHTML = `${result.users.length} matching results found!`;
        document.getElementById("input").appendChild(p);

        //console.log(result.users[2].user.username);
        //console.log(result.users[2].user.full_name);
        //console.log(result.users.length);
    }).catch((err) => {
        console.log(err);
    });

    e.preventDefault();
});




// KULLANIMI

//const request = new Request();

//request.get("https://jsonplaceholder.typicode.com/albums")
//.then(newAlbum => console.log(newAlbum))
//.catch(err => console.log(err));

// buradaki requestlerin kullanimi icin google ve kullandigin api in sitelerini kurcala