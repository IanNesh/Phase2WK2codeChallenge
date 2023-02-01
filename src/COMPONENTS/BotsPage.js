import React, {  useEffect, useState } from "react"
import BotCollection from "./BotsCollection"
import YourBotArmy from "./YourBotArmy"
function BotsPage() {
    const [bots, setBot] = useState([])
    // const [imgId, setImgId] = useState(0)const [imgId, setImgId] = useState(0)
    const [emptyId, setEmptyId] = useState([])
 useEffect(() => {
    fetch('https://json-server-vercel2-cko5y689j-alexirungu-moringaschoo.vercel.app/bots')
      .then(response => response.json())
      .then(data => setBot(data))
      .then(console.log("Bots Fetched!"))
  }, [])
  let addBot = (bot) => {
    let arrayId = [...emptyId]
    arrayId.push(bot.id)
    setEmptyId(arrayId)
    if(emptyId.find(item => item === bot.id)){
      console.log('logged');
    }else{
      let appendImage = document.querySelector(".bot-army")
      let cardAppend = document.createElement("div")
      cardAppend.setAttribute("value", bot.id)
      cardAppend.innerHTML = `
      <div className="card-body">
      <h2 className="description">Health: ${bot.health}</h2>
      <h2 className="category">Damage: ${bot.damage}</h2>
      <h2 className="amount">armor: ${bot.armor}</h2>
      <h2 className="date" >Name: ${bot.name}</h2>
    <img src=${bot.avatar_url} alt="url" className="img" />
    </div>
      `
      cardAppend.addEventListener("click", () => {
        let value = parseInt(cardAppend.getAttribute("value"))
        let newValue = emptyId.filter((item) => {
          return item !== value
        })
        setEmptyId(newValue)
        cardAppend.remove()
      })
      appendImage.appendChild(cardAppend)
    }
  }
    return (
      <div>
        <YourBotArmy
          bots={bots.filter((b) =>b.army)}
          />
        <BotCollection
        bots = {bots}
        addBot = {addBot}
        />
      </div>
    )
  }
export default BotsPage