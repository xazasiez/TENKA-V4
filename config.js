// Module
const fs = require('fs')

//Bot Settings
global.connect = true // True For Pairing // False For Qr
global.publicX = true // True For Public // False For Self
global.owner = ['6285381384461'] //Own Number
global.developer = "ghaanyasedangtidur" //Dev Name
global.botname = "Tenka Overload" //Bot Name
global.version = "4.0" //Version Bot

//Sticker Setiings
global.packname = "Sticker By" //Pack Name 
global.author = "Ghaa" // Author

// PAYMENT
global.dana = "085136866845"
global.ovo = "Belum Ada"
global.gopay = "085381384461"
global.qris = "Belum ada" //kalo punya foto nya tempelin link aja

//Social Media Settings
global.ytube = "https://youtube.com/@ghaanyasedangtidur"
global.ttok = "https://tiktok.com/@ghaanyasedangtidur"
global.igram = "instagram.com/Nbgh_12"
global.chtele = "https://t.me/GHAAIDDH"
global.tgram = "https://t.me/GHAAIDDD"

//System Bot Settings
global.prefa = ['','!','.',',','🐤','🗿'] // Prefix // Not Change

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})