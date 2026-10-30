# Yosua V. Watulangkow — Portfolio

Website portofolio pribadi dengan tampilan **Dark Cyberpunk + Futuristic Tech + Liquid Glass**.

Website ini sepenuhnya statis: HTML, CSS, dan JavaScript. Tidak memerlukan PHP, database, XAMPP, Apache, atau backend.

## Preview lokal

Cara termudah: buka `index.html` langsung di browser.

Atau gunakan ekstensi Live Server di Visual Studio Code, lalu pilih **Open with Live Server** pada `index.html`.

## Publikasikan dengan GitHub Pages

1. Buat repository baru di GitHub, misalnya `yosua-portfolio`.
2. Ekstrak ZIP ini, lalu upload **isi folder** ke root repository. Pastikan `index.html` berada langsung di root repository, bukan di dalam folder tambahan.
3. Buka **Settings → Pages** pada repository.
4. Pada bagian **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/(root)`, lalu klik **Save**.
6. Setelah GitHub Pages selesai menerbitkan website, alamatnya akan tampil di bagian Pages. Biasanya formatnya `https://USERNAME.github.io/NAMA-REPOSITORY/`.

## Ganti foto profil

1. Siapkan foto dengan format JPG atau PNG.
2. Letakkan di folder `assets/images/`.
3. Ubah nama file menjadi `profile.jpg`.
4. Commit dan push perubahan ke GitHub. Website akan memakai foto tersebut secara otomatis.

Jika foto belum ditambahkan, website akan menampilkan gambar placeholder.

## Isi WhatsApp dan Facebook

Edit file `assets/js/config.js`:

```js
window.PORTFOLIO_CONFIG = {
  whatsapp: "6281234567890", // Nomor internasional tanpa +, spasi, atau tanda baca
  facebook: "https://www.facebook.com/username"
};
```

Ganti contoh nomor dan tautan dengan milikmu. Tautan WhatsApp dan Facebook hanya tampil jika nilainya sudah diisi. Email dan Instagram sudah dicantumkan di website.

## Struktur folder

```text
yosua-portfolio/
├── index.html
├── README.md
├── .nojekyll
└── assets/
    ├── css/
    │   └── style.css
    ├── images/
    │   ├── favicon.svg
    │   └── profile-placeholder.svg
    └── js/
        ├── config.js
        └── main.js
```

## Kustomisasi

- Konten dan teks: `index.html`
- Tampilan, warna, efek Liquid Glass, dan responsivitas: `assets/css/style.css`
- Animasi dan interaksi: `assets/js/main.js`
- Kontak WhatsApp dan Facebook: `assets/js/config.js`

Catatan: font Manrope dan DM Mono dimuat dari Google Fonts. Jika koneksi internet tidak tersedia, website tetap tampil dengan font fallback dari perangkat.
