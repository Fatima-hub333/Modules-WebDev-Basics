let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const olEl = document.getElementById("ol-el")

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value)
  inputEl.value = ""
  renderLeads()
})

function renderLeads() {
  let lisItems = ''
for (let i = 0; i < myLeads.length; i += 1) {
  lisItems += "<li>" + myLeads[i] + "</li>"
}
olEl.innerHTML = lisItems
}
