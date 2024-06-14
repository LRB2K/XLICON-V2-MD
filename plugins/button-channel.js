import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async m => {
  const imageBuffer = await (await fetch('https://telegra.ph/file/403a47e628ef49dee27a3.jpg')).buffer()
  let imgurl = await uploadImage(imageBuffer)
  
  const messageContent = `
  ╭⭑⭑⭑★✪ *LRB2K* ✪★⭑⭑⭑
  │ 📂 *BOT Name:* LRB2K
  │ 📝 *Description:* _I'm LRB2K. A MultiDevice WhatsApp bot with rich features Created By LRB2K.
  │ 👤 *Owner:* LRB2K
  │ 🌐 *Channel:* null
  ╰━━━━━━━━━━━━━━━━╯
  `.trim()
  const imageBuffer = await response.buffer()
      let imgurl = await uploadImage(imageBuffer)
      await conn.sendButton(m.chat,'Here is your Result', author, imgurl, [['MENU', `${usedPrefix}menu`]], null, [['WATCH ANIME', `https://ab-streamer.vercel.app`]], m)
}
handler.help = ['bchannel']
handler.tags = ['main']
handler.command = ['xlchannel', 'bchannel']
export default handler
