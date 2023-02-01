import React from 'react';
import BotCard from './BotCard';
function BotCollection({bots, addBot, deleteBot }) {
  const displayBotCards = bots.map(bot => {
    return (
    <BotCard
    key={bot.id}
    bot={bot}
    clickEvent={addBot}
    deleteBot={deleteBot}
     />
     );
  });
  return (
    <div className="container">
        {displayBotCards}
    </div>
  )
}
export default BotCollection