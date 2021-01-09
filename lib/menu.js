exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `*MENU ${BotName}*

Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Berikut adalah beberapa fitur yang ada pada bot ini$✨

📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*

         ───
♻ Command / Perintah :
         ───
         
╭───「 *Menu* 」
├≽ ️$sticker
├≽️ $pantun
├≽️ $quotes
├≽️ $foto cewek/cowok
├≽️ $tts
├≽️ $say
├≽️ $quran
├≽️ $twt
├≽️ $fb
├≽️ $ig
├≽️ $ytmp3
├≽️ $yt
├≽️ $wiki
├≽️ $lirik
├≽️ $nulis
├≽️ $sholat (nama daerahmu)
├≽️ $toxic (anjing)
├≽️ $fotoanime
├≽️ $covid
├≽️ $alay
├≽️ $nama
├≽️ $pasangan
├≽️ $owner
├≽️ $creator
├≽️ $cek
├≽️ #info
╰─────────

[ Keterangan ]

» $sticker Contoh: kirim gambar dengan caption $sticker
» $pantun Contoh: $pantun
» $quotes Contoh: $quotes
» $foto Contoh: $foto cowo
» $tts Contoh: $tts Aris ganteng (${BotName} akan mengirim link download)
» $say Contoh: $say halo Aris ganteng
» $quran Contoh: $quran
» $twt Contoh: $twt Link twitter
» $fb Contoh: $fb Link FB
» $ig Contoh: $ig Link IG
» $ytmp3 Contoh: $ytmp3 Link video YT yang mau di download
» $yt Contoh: $yt Link YT
» $wiki Contoh: $wiki Serah Lu dah awoakoakwkk
» $lirik Contoh: $lirik
» $nulis Contoh: $nulis Ferdi Gans
» $fotoanime Contoh: $fotoanime
» $covid Contoh: $covid
» $nama Contoh $nama Ferdi
» $pasangan Contoh: $pasangan Ferdi & N****
» #info Contoh: #info
 
 
 
├───≽️「 *ABOUT* 」
 
 
├≽️Follow akun instagram Ownerku Yak ${Ferdi_ardian21}
 
├───≽️「 *INFORMASI COVID-19 TERBARU$* 」
 
├≽️📊 POSITIF: *${corohelp.confirmed.value}*
├≽️📉 SEMBUH: *${corohelp.recovered.value}*
├≽️📈 MENINGGAL: *${corohelp.deaths.value}*
├≽️🗂️ UPDATE: *${corohelp.lastUpdate}*
 
├≽️💫 _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER$_
 
├≽️☎️ WA : *${6282169369877}*
 
├≽️📌 *Modifikasi By Ferdi Ardian* ‼️
├≽️📌 *Kalo ada bug maklumin yah* ‼️
├≽️📌 *Bot ini berjalan ${24Jam}* ‼️


├≽️💥 *Group WhatsApp* ; ${grupch1}
 
 
├≽️   📍*MADE BY ${BotName}*📍
╰ ───`
}
