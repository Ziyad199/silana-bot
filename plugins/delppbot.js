let handler = async (m, { conn }) => {
  await conn.removeProfilePicture(conn.user.jid)
  m.reply('تم بنجاح حذف صورة البروفايل الخاص بالبوت.')
}

handler.menu = ['delppbot']
handler.owner = ['owner']
handler.tagall = /^(delppbot)$/i

handler.rowne = true

export default handler
