let handler = function (m) {
  // this.sendContact(m.chat, '6282323835783', 'Sad', m)
  this.sendContact(m.chat, '6282323835783', 'Admin BOT SAD', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
