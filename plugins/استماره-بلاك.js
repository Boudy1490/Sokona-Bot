let handler = async (m, { command, text }) => m.reply(`*❖╎━┄─┄⌬ ⌝❄️⌞ ⌬┄─┄━╎❖*

*◞اهـلا وسـهلا بك في اسـتـقبـال نـقابـه〘𝐒𝐍𝐎𝐖⊰❄⊱𝐁𝐋𝐀𝐂𝐊〙*

*❖╎━┄─┄⌬ ⌝❄️⌞ ⌬┄─┄━╎❖*
*『┊اللـقـب╎』*

*『 ┊الانمـي╎』*

*『┊الجـنس╎』*

*『┊من طـرف╎』*
*❖╎━┄─┄⌬ ⌝❄️⌞ ⌬┄─┄━╎❖*
*⌝‼️┆↯مـلاحظه↯┆‼️⌞*
*〄╎يـجـب ارفـاق صـوره للـقـب*
*〄╎ممـنوع اخـتيار شخـصين معـاكسه لجنـسك*
*❖╎━┄─┄⌬ ⌝❄️⌞ ⌬┄─┄━╎❖*
*⌝┆↯تـوقـيع نـقـابـه↯┆⌞*
*『𝙳𝚊𝚛𝚔┆❄️┆𝙽𝚒𝚐𝚑𝚝』*
*❖╎━┄─┄⌬ ⌝⌞ ⌬┄─┄━╎❖*`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['الاوامر <teks>?']
handler.tags = ['الاوامر', 'fun']
handler.command = /^(black|بلاك)$/i

export default handler
