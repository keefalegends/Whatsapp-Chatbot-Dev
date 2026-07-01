# KeeAI

KeeAI adalah asisten chatbot WhatsApp pribadi yang cerdas dan responsif, dibangun dengan menggunakan Node.js dan library `whatsapp-web.js`.

## Fitur Utama

- **Auto-Reply Perintah**: Menjawab perintah berbasis teks.
- **Bebas Spam**: Hanya membalas pesan yang diawali dengan awalan perintah `!`.
- **Session Auth Terintegrasi**: Menyimpan sesi WhatsApp secara lokal agar tidak perlu berulang kali melakukan scan QR code.

## Daftar Perintah

- `!ping`: Cek konektivitas dan status keaktifan bot.
- `!menu`: Menampilkan daftar menu dan perintah yang tersedia.
- `!info`: Penjelasan singkat tentang KeeAI.

## Cara Menjalankan

1. Pastikan Anda sudah menginstal Node.js di komputer Anda.
2. Jalankan perintah install dependency:
   ```bash
   npm install
   ```
3. Jalankan aplikasi bot:
   ```bash
   node index.js
   ```
4. Scan QR Code yang muncul di terminal (atau via browser yang terbuka otomatis) menggunakan aplikasi WhatsApp di handphone Anda.
