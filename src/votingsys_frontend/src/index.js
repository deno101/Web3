import { votingsys_backend } from "../../declarations/votingsys_backend";

// document.querySelector("form").addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const button = e.target.querySelector("button");

//   const name = document.getElementById("name").value.toString();

//   button.setAttribute("disabled", true);

//   // Interact with foo actor, calling the greet method
//   const greeting = await votingsys_backend.greet(name);

//   button.removeAttribute("disabled");

//   document.getElementById("greeting").innerText = greeting;

//   return false;
// });

await votingsys_backend.addResult("one", "two", 45);

let rst = document.getElementById("container");

if (rst != undefined) {
  let data = await votingsys_backend.getResults()
  data = data[0][0];

  console.log(data[0][0]);

    data.forEach((k, v) => {

      console.log(v);

      rst.innerHTML += `<div class="" id="container">
    <div class="card m-4">
      <div class="card-header">
        ${v.polling_station}
      </div>
      <div class="card-body">
        <h5 class="card-title">${v.time}</h5>
        <p class="card-text">${v.votes} </p>
      </div>
    </div>
  </div>`

    })
}

document.getElementById("form").addEventListener("click", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const canisterId = urlParams.get('canisterId');

  // works only in firefox 21+
  let destination = window.location.origin + "/" + "form.html?canisterId=" + canisterId;

  console.log(destination);

  window.location.replace(destination);
})


