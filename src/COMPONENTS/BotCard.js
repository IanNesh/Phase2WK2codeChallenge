import React from "react"
function BotCard({bot, clickEvent, removeBot}){
return (
  <div className="card"
    key={bot.id}
    onClick={() =>
      {clickEvent(bot)
      removeBot(bot)
      }}
>
  <div className="card-body">
    <h2 className="description">Health: {bot.health}</h2>
    <h2 className="category">Damage: {bot.damage}</h2>
    <h2 className="amount">Amount: {bot.armour}</h2>
    <h2 className="date" onClick={() => {clickEvent(bot)}}>Name: {bot.name}</h2>
  <img src={bot.avatar_url} alt="url" className="img" />
  </div>
  </div>
)
}
export default BotCard