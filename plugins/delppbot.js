let handler = async (m, { conn }) => {
  await conn.removeProfilePicture(conn.user.jid)
  m.reply('تم بنجاح حذف صورة البروفايل الخاص بالبوت.')
}

handler.menu = [menubot']
handler.apk
  .video 
  .ytmp3 
  .ytmp4
  .chrom 
  .mediafire
  .tiktok
  .insta
  .gogle= ['donwload']
handler.group 
  .kick 
  .sfpautokickblock
  .antilink 
  .onwelcome
  .offwelcome
  .open
  .close
  .antiprivé= /^menu group)$/i
handler.code = الكود لربط الجهاز

export default handler
