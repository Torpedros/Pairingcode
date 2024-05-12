 const {
    generateWAMessageFromContent
} = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, usedPrefix: _p }) => {

  let arr = []
for (let i = 0; i < 404; i++) arr.push({ productId: '4380444045392529' }) 
let list = await( await generateWAMessageFromContent(m.chat, { listMessage: { title: 'ꜱɪᴍᴩʟᴇ ᴡʜᴀᴛꜱᴀᴩᴩ ʙᴏᴛ',  description: `- _*About me*_\n\n- Owner : Pedro'sbot\n- Age: Unknown/ Unknown\n - Github: Unknown\n\n thx.` , listType: 2, productListInfo: { productSections: [{ title: 'github: Unknown', products: arr }], headerImage: { productId: '4380444045392529', jpegThumbnail: thumb2 }, businessOwnerJid: '6287827659529@s.whatsapp.net' }, footerText: `© ${conn.getName('6283820073017@s.whatsapp.net')}` }}, { quoted: m }))
return await conn.relayMessage(m.chat, list, { waitForAck: true })
  
}

handler.command = /^(gw)$/i
export default handler
