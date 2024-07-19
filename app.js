let contactName = document.getElementById("contact-name")
let contactPhone = document.getElementById("contact-phone")
let contactBtn = document.querySelector(".contact-button")
let contactList = document.querySelector(".contacts")
let dateElement = document.querySelector(".contact-time")
let contactArray = []
let id = 0
// 
function updateTime(){
    
let currentTime = new Date()
let timeString = currentTime.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})
dateElement.textContent =  timeString
console.log(timeString)
}
updateTime()
setInterval(updateTime, 10000)
// 
function addContact(){}

contactBtn.addEventListener("click", (ev)=>{
    ev.preventDefault()
    // 
    let textValue = contactName.value.trim()
    let numberValue = contactPhone.value.trim()
    // 
    id++
    if(textValue !== "" && numberValue !== ""){
        let contactObj = {
            name: textValue,
            phone: numberValue,
            iD: `index${id}`
        }
        contactArray.push(contactObj)
        let newElement = document.createElement("div")
        for(let i = 0; i < contactArray.length; i++){
            console.log(i)
            // console.log(contactArray[i])
            newElement.classList.add("contact-list")
            newElement.innerHTML = `
            <img src="image.jpg" alt="a very good looking guy in a selfie" class="contact-img">
                    <span class="name-phone">
                        <p class="name">${contactArray[i].name}</p>
                        <p class="number">${contactArray[i].phone}</p>
                        <button type="reset" class="contact-delete"><i class="fa-solid fa-user-xmark"></i></button>
                    </span>`
            
             let delBtn = newElement.querySelector(".contact-delete")
             delBtn.addEventListener("click", () => deleteContact(newElement, i))
    
        }
             contactList.append(newElement)
             contactName.value = ""
             contactPhone.value = ''
    } 
    else{
        alert("Contact Info cannot be empty, please insert a value")
    } 
})

let deleteContact = (newElement, i) =>{
    newElement.style.display =  "none"
    contactArray.splice(i, 1)

}
