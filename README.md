# 🎉 Source Code Netflix Birthday 🎉

### by Didin

Ini adalah panduan lengkap untuk mengakses dan menjalankan **Netflix Birthday** project, bahkan jika kamu belum pernah coding sebelumnya!

## ✨ Tools yang Perlu Kamu Install:

1. **Visual Studio Code** ➡️ Code editor untuk melihat dan mengedit project.
2. **Bun JS** ➡️ Runtime JavaScript agar aplikasi bisa dijalankan di perangkatmu.
3. **Git Bash** (opsional) ➡️ Terminal untuk menjalankan perintah (bisa gunakan bawaan Windows seperti **CMD**).
4. **Vercel** ➡️ Vercel CLI Untuk melakukan deployment dan mempublikasikan project ke internet .

---

## 🚀 Cara Running Project:

1. **Buka Git Bash** dengan path yang sesuai dengan folder kita.
2. Jalankan perintah **`bun install`** untuk menginstall semua dependency yang ada.
3. Ketik **`code .`** di terminal untuk membuka code editor **Visual Studio Code**.
4. Setelah itu, di terminal ketikkan **`bun run dev`** untuk menjalankannya di local server kita.
5. Buka file **`index.html`**:
   - Pada tag **`<title>...</title>`**, kalian bisa ganti isinya sesuai keinginan kalian.
   - Pada bagian **`<link rel="icon" type="image/png" href="/src/assets/pics/ubah bagian sini" />`**, ubah sesuai path gambar yang diinginkan untuk mengubah tampilan tab di atas browser.
6. Buka folder **`src`**, lalu buka file **`App.jsx`**:
   - Ubah bagian **`<h1>How to say Happy...</h1>`** untuk mengubah teks utama _(heading)_ di awal.
7. Ubah juga deskripsinya yang berada di dalam tag **`<p>This is how didin...</p>`**.
8. Untuk mengubah gambar utama (highlight):
   - Di bagian paling atas file **`App.jsx`** ada kode:
     ```javascript
     import heroImg from "./assets/pics/7.jpg";
     ```
     Sesuaikan pathnya dengan gambar yang ingin digunakan.
9. Untuk mengubah foto galeri di bawah, buka folder **`src/constants`**, lalu buka file **`images.js`**:
   - Import gambar sesuai dengan path gambar yang berada di folder **`src/assets/pics`**.
   - Sesuaikan jumlah import gambar sesuai keinginan, contohnya:
     ```javascript
     import Img1 from "../assets/pics/1.jpg";
     import Img2 from "../assets/pics/2.jpg";
     import Img3 from "../assets/pics/3.jpg";
     import Img4 from "../assets/pics/4.jpg";
     import Img5 from "../assets/pics/5.jpg";
     import Img6 from "../assets/pics/6.jpg";
     ```
10. Samakan jumlah import dengan array yang ada di bawah, contohnya:
    ```javascript
    export const images = [
      { src: Img1 },
      { src: Img2 },
      { src: Img3 },
      // dst...
    ];
    ```

---

## 🌐 Langkah-langkah Deploy ke Internet

Setelah project selesai, kita perlu melakukan deploy agar project bisa diakses melalui internet. Berikut adalah langkah-langkahnya:

1. Di Google cari **Vercel**,buka website resminya [https://vercel.com/](https://vercel.com/)
2. Tekan Button **Sign up** yang ada di atas,isi datanya,jika ada yg bisa di skip,skip aja
3. Sign up menggunakan email kalian
4. Pilih **Continue with email** ( mungkin teman-teman yg ada basic coding bisa lgsg pakai **GitHub** aja,selebihnya kurang lebih paham )
5. jika sudah kembali ke terminal dengan path folder kita tadi
6. check versi vercel dengan perintah "vercel --version"untuk memastikan vercel sudah terinstall ya
7. ketik di terminal "vercel login"
8. lalu verifikasi dengan email kita
9. setelah itu ketik "vercel"
   10.Set up and deploy “.......”? yes
   ? Which scope do you want to deploy to? enter aja
   ? Link to existing project? no ---> Ini buat bikin project baru di web nya
   ? What’s your project’s name? enter aja,biasanya udah ada saran nama
   ? In which directory is your code located? ./ enter aja
10. enter sampai build
11. setelah itu lihat di dashboard vercel kita,jika berhasil akan ada project baru muncul
12. linknya berada di bawah nama project,belakangnya ada verce.app nya,bisa di klik untuk dilihat
13. jika ingin custom nama linknya klik titik 3 di project,pilihmanage domain
14. klik edit lalu di input domain ubah sesuai yg kita mau ( yang bisa diubah hanya yang sebelum vercel.app nya ya )
15. ketik save dan sudah bisa di akses lagi

---

Dengan mengikuti panduan di atas, siapapun bisa menjalankan **Netflix Birthday Project** tanpa perlu banyak pengetahuan coding! 🎉
