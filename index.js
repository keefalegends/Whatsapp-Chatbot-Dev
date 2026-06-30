const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// 1. Inisialisasi client WhatsApp
const client = new Client({
    authStrategy: new LocalAuth() // Menyimpan sesi biar gak perlu scan QR terus-terusan
});

// 2. Generate QR Code di Terminal
client.on('qr', (qr) => {
    console.log('SCAN QR CODE INI PAKAI WHATSAPP KAMU:');
    qrcode.generate(qr, { small: true });
});

// 3. Notifikasi kalau bot sudah tersambung
client.on('ready', () => {
    console.log('Wazapbro Lokal Berhasil Konek! Bot siap menerima perintah.');
});

// 4. Logika Auto-Reply (Fitur Inti Wazapbro)
client.on('message', async (msg) => {
    // Mengubah pesan jadi huruf kecil semua biar ga sensitif
    const pesan = msg.body.toLowerCase();

    if (pesan === '!ping') {
        msg.reply('Pong! Bot Desnet lokal aktif, bro. 😎');
    } 
    
    else if (pesan === '!menu') {
        msg.reply(
            `=== LAYANAN WAZAPBRO LOKAL ===\n\n` +
            `Silahkan pilih perintah berikut:\n` +
            `1. *!ping* -> Cek status bot\n` +
            `2. *!info* -> Tentang PT Desnet`
        );
    } 
    
    else if (pesan === '!info') {
        msg.reply('PT Desnet adalah perusahaan ISP dan IT Solution yang keren tempat gw lagi PKL sekarang!');
    }
});

// Jalankan sistem
client.initialize();