PORTOFOLIO ELANG MAHENDRAWAN — FIREBASE HOSTING
================================================

Isi paket:
- public/index.html     Halaman portofolio utama
- public/style.css      Desain responsif
- public/script.js      Menu mobile dan pilihan bahasa EN/ID
- public/favicon.svg    Ikon EM
- public/robots.txt     Petunjuk untuk crawler
- public/sitemap.xml    Sitemap dasar
- public/404.html       Halaman error 404
- firebase.json         Konfigurasi Firebase Hosting
- .firebaserc.example   Contoh konfigurasi project Firebase

CARA DEPLOY PEMULA
1. Ekstrak ZIP ini di laptop.
2. Install Node.js LTS: https://nodejs.org/
3. Buka Command Prompt/Terminal di folder hasil ekstrak.
4. Jalankan:
   npm install -g firebase-tools
   firebase login
   firebase init hosting
5. Pilih project Firebase yang sudah dibuat.
   Public directory: public
   Configure as a single-page app: No
   Set up automatic builds and deploys with GitHub: No (opsional)
   Jika ditanya overwrite public/index.html, pilih No.
6. Jalankan:
   firebase deploy
7. Firebase akan menampilkan alamat website berakhiran web.app.

CATATAN PENTING
- Jangan ubah email contoh; email yang dimasukkan adalah:
  elangmahendrawan.8@gmail.com
- Periksa ulang seluruh data sebelum dipublikasikan.
- Proyek Raspberry Pi ditulis sebagai konsep/proyek karena status penyelesaian dan hasil akhir belum dijelaskan.
- THOR ditulis sebagai pengalaman terkait Monitoring Energy & Set Up Utility. Tambahkan peran pribadi, perangkat, dan hasil yang terverifikasi bila ingin lebih rinci.
- Deskripsi Fire Alarm dibuat sebagai pengalaman teknis, bukan klaim bahwa pengguna merancang keseluruhan sistem.
- Perbarui canonical URL dan URL di structured data, robots.txt, dan sitemap.xml setelah memperoleh domain Firebase:
  ganti https://YOUR-PROJECT-ID.web.app/ dengan alamat website milikmu.
- Untuk Google Search Console, tambahkan properti website setelah deploy, lalu kirim sitemap.xml.
- Font dari Google Fonts memerlukan internet; jika tidak tersedia, website tetap memakai font cadangan.
- Tidak ada sertifikat atau penghargaan yang ditampilkan karena belum diberikan.
