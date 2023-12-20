import { votingsys_backend } from "../../declarations/votingsys_backend";

let form = document.querySelector("form");
if (form != undefined) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const button = e.target.querySelector("button");

    const clerk_name = document.getElementById("clerk_name").value.toString();
    const polling_station = document.getElementById("polling_station").value.toString();
    const votes = document.getElementById("votes").value.toString();


    // Interact with foo actor, calling the greet method
    await votingsys_backend.addResult(polling_station, clerk_name, parseInt(votes));

    const urlParams = new URLSearchParams(window.location.search);
    const canisterId = urlParams.get('canisterId');

    // works only in firefox 21+
    let destination = window.location.origin + "/" + "table.html?canisterId=" + canisterId;

    window.location.replace(destination);

    return false;
  });

}
let rst = document.getElementById("container");

console.log(rst);


if (rst != undefined) {
  let data = await votingsys_backend.getResults()
  data = data;

  for (var i = 0; i < data.length; i++) {
    let v = data[i]

    rst.innerHTML += `<tr>
      <td>${v.clerk_name}</td>
      <td>${v.polling_station}</td>
      <td>${v.votes}</td>
      <td>${v.time}</td>
    </tr>`


  }
}

let go_to = document.getElementById("go_to_form");

if (go_to != undefined) {
  go_to.addEventListener("click", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const canisterId = urlParams.get('canisterId');

    // works only in firefox 21+
    let destination = window.location.origin + "/" + "form.html?canisterId=" + canisterId;

    console.log(destination);

    window.location.replace(destination);
  });

} ''