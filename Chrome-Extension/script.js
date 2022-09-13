let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const olEl = document.getElementById("ol-el")
const deleteBtn = document.getElementById("delete-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  renderLeads()
} 

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear()
  myLeads = []
  renderLeads()
})
  
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  renderLeads()
})

function renderLeads() {
  let lisItems = ''
for (let i = 0; i < myLeads.length; i += 1) {
  // lisItems += "<li><a target '_blank' href='#''>" + myLeads[i] + "</a></li>"
  lisItems += `
    <li>
      <a target '_blank' href='${myLeads[i]}'> 
        ${myLeads[i]}
      </a>
    </li>`
}
olEl.innerHTML = lisItems
}
