let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const olEl = document.getElementById("ol-el")

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value)
  console.log(myLeads)
})

for (let i = 0; i < myLeads.length; i += 1) {
  olEl.innerHTML += "<li>" + myLeads[i] + " " + "</li>"
}