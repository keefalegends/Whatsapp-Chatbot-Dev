const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// 1. Inisialisasi client dengan argumen Puppeteer yang lebih stabil
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-accelerated-2d-canvas',
            '--no-first-run',
            '--no-zygote',
            '--disable-gpu'
        ]
    }
});

// 2. Generate QR Code
client.on('qr', (qr) => {
    console.log('SCAN QR CODE INI PAKAI WHATSAPP KAMU:');
    qrcode.generate(qr, { small: true });
});

// 3. Notifikasi Sukses
client.on('ready', () => {
    console.log('Wazapbro Lokal Berhasil Konek! Bot siap menerima perintah.');
});

// 4. Logika Auto-Reply yang Lebih Aman (Menggunakan Async/Await)
client.on('message', async (msg) => {
    try {
        const pesan = msg.body.toLowerCase();

        if (pesan === '!ping') {
            await msg.reply('Pong! Bot Desnet lokal aktif, bro. 😎');
        } 
        else if (pesan === '!menu') {
            await msg.reply(
                `=== LAYANAN WAZAPBRO LOKAL ===\n\n` +
                `Silahkan pilih perintah berikut:\n` +
                `1. *!ping* -> Cek status bot\n` +
                `2. *!info* -> Tentang PT Desnet`
            );
        } 
        else if (pesan === '!info') {
            await msg.reply('PT Desnet adalah perusahaan ISP dan IT Solution yang keren tempat gw lagi PKL sekarang!');
        } 
        // SOLUSI BUG 1: Respon jika perintah tidak dikenali
        else {
            await msg.reply('Maaf bro, perintah tidak dikenali. Ketik *!menu* untuk melihat daftar perintah.');
        }
    } catch (error) {
        console.error('Gagal membalas pesan:', error);
    }
});

// SOLUSI BUG 2: Menangkap error background agar Node.js tidak force close / stuck
process.on('unhandledRejection', (reason, p) => {
    console.log('Terjadi interupsi sistem (browser reload), tapi bot tetap bertahan hidup. Lanjut chat aja.');
});

// Jalankan sistem
client.initialize();