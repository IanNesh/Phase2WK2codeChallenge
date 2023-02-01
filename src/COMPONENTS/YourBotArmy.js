import React from 'react'
import BotCard from './BotCard'
 function YourBotArmy({bots, removeBot, deleteBot}) {
  const displayBots = bots.map(bot => {
    return (
    <BotCard
    key={bot.id}
    bot={bot}
    removeBot={removeBot}
   deleteBot={deleteBot} />)
  })
  return (
    <div className="bot-army">
          {displayBots}
    </div>
  )
}
export default YourBotArmy