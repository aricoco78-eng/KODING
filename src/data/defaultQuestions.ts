import { Question } from '../types';

import algoritmaUrutanImg from '../assets/images/koding_algoritma_urutan_1795580181632.jpg';
import polaDekomposisiImg from '../assets/images/koding_pola_dekomposisi_1795580181623.jpg';
import keamananDigitalImg from '../assets/images/koding_keamanan_digital_1795580181656.jpg';
import aiFilterRekomendasiImg from '../assets/images/koding_ai_filter_rekomendasi_1795580183564.jpg';
import aiLatihChatbotImg from '../assets/images/koding_ai_latih_chatbot_1795580184018.jpg';

/**
 * Bank Soal Tes Sumatif KODING Kelas 6 - Kurikulum Merdeka
 * Lingkup Materi:
 * 1. Berpikir Komputasional & Algoritma:
 *    - Urutan langkah (sequence): Menyusun instruksi logis untuk menyelesaikan masalah sehari-hari.
 *    - Pola dan dekomposisi: Memecah masalah besar menjadi bagian kecil serta mengenali pola yang berulang.
 * 2. Literasi Digital & Pengantar AI:
 *    - Keamanan & etika digital: Menjaga informasi pribadi, bersikap bijak di internet, serta memahami etika penggunaan teknologi.
 *    - Dasar kecerdasan artifisial (AI): Mengenal contoh AI di sekitar (seperti filter kamera atau sistem rekomendasi) dan simulasi sederhana melatih model/chatbot ramah anak.
 *
 * Komposisi:
 * - 30 Pilihan Ganda (PG, 4 opsi A–D)
 * - 5 Pilihan Ganda Kompleks (PGK, 3 opsi A–C, lebih dari 1 jawaban benar)
 * - 5 Pilihan Ganda Kompleks Kategori (PGK Kategori, 3 pernyataan Benar/Salah)
 */
export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // PILIHAN GANDA (1 - 30) : 4 OPSI (A - D)
  // =========================================================================

  // --- BERPIKIR KOMPUTASIONAL & ALGORITMA: URUTAN LANGKAH / SEQUENCE (SOAL 1 - 8) ---
  {
    id: 1,
    type: 'pg',
    topic: 'Berpikir Komputasional: Urutan Langkah (Sequence)',
    elemen: 'Algoritma & Pemrograman',
    difficulty: 'Mudah',
    imageUrl: algoritmaUrutanImg,
    imageCaption: 'Simulasi robot di atas papan petak 4x4 berjalan dari bendera hijau menuju bintang kuning',
    text: 'Perhatikan gambar papan petak di atas. Robot mulai dari petak bendera hijau di pojok kiri bawah dan harus bergerak menuju petak bintang kuning tanpa menabrak kerucut merah. Urutan langkah (sequence) yang paling tepat dan singkat untuk mencapai bintang kuning adalah ....',
    options: [
      { id: 'A', text: 'Maju 1 petak ke kanan, belok ke atas 1 petak, lalu belok ke kanan 1 petak' },
      { id: 'B', text: 'Maju 1 petak ke kanan, lalu bergerak lurus ke atas 3 petak sampai ujung' },
      { id: 'C', text: 'Maju 3 petak ke atas langsung dari pojok kiri bawah, lalu ke kanan' },
      { id: 'D', text: 'Diam di petak bendera hijau lalu melompati kerucut merah' },
    ],
    correctAnswer: 'A',
    explanation:
      'Dari pojok kiri bawah (kolom 1, baris 1), robot melangkah 1 petak ke kanan ke (kolom 2, baris 1), naik 1 petak ke (kolom 2, baris 2), lalu ke kanan 1 petak tepat menuju bintang kuning di (kolom 3, baris 2) tanpa menyentuh kerucut merah di baris teratas.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Berpikir Komputasional: Urutan Langkah (Sequence)',
    elemen: 'Algoritma & Pemrograman',
    difficulty: 'Mudah',
    text: 'Dalam koding dan berpikir komputasional, sekumpulan langkah atau instruksi yang disusun secara runtut dan logis untuk menyelesaikan suatu masalah disebut ....',
    options: [
      { id: 'A', text: 'Algoritma' },
      { id: 'B', text: 'Kata sandi' },
      { id: 'C', text: 'Monitor' },
      { id: 'D', text: 'Phishing' },
    ],
    correctAnswer: 'A',
    explanation:
      'Algoritma adalah urutan langkah-langkah logis yang disusun secara sistematis untuk menyelesaikan suatu pekerjaan atau masalah.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Berpikir Komputasional: Urutan Langkah (Sequence)',
    elemen: 'Algoritma & Pemrograman',
    difficulty: 'Mudah',
    text: 'Perhatikan langkah-langkah menyikat gigi berikut yang masih acak:\n(1) Berkumur dengan air bersih\n(2) Mengoleskan pasta gigi pada sikat gigi\n(3) Menggosok gigi secara merata\n(4) Menyiapkan sikat gigi yang bersih\nUrutan langkah (sequence) yang benar adalah ....',
    options: [
      { id: 'A', text: '(4) - (2) - (3) - (1)' },
      { id: 'B', text: '(2) - (4) - (1) - (3)' },
      { id: 'C', text: '(3) - (1) - (4) - (2)' },
      { id: 'D', text: '(4) - (3) - (2) - (1)' },
    ],
    correctAnswer: 'A',
    explanation:
      'Urutan logis menyikat gigi dimulai dengan menyiapkan sikat gigi (4), mengoleskan pasta gigi (2), menggosok gigi (3), lalu berkumur dengan air bersih (1).',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Berpikir Komputasional: Urutan Langkah (Sequence)',
    elemen: 'Algoritma & Pemrograman',
    difficulty: 'Sedang',
    text: 'Mengapa urutan instruksi (sequence) sangat penting saat kita menulis program untuk komputer atau robot?',
    options: [
      { id: 'A', text: 'Komputer menjalankan perintah secara berurutan satu per satu sesuai instruksi yang diberikan' },
      { id: 'B', text: 'Komputer bisa menebak sendiri maksud manusia meskipun perintahnya terbalik' },
      { id: 'C', text: 'Urutan langkah hanya digunakan untuk menghias tampilan layar' },
      { id: 'D', text: 'Agar komputer tidak perlu memakai listrik saat dinyalakan' },
    ],
    correctAnswer: 'A',
    explanation:
      'Komputer mengeksekusi perintah secara tepat sesuai urutan (sequence). Jika urutannya terbalik atau salah, hasil program juga akan keliru.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Berpikir Komputasional: Urutan Langkah (Sequence)',
    elemen: 'Algoritma & Pemrograman',
    difficulty: 'Sedang',
    imageUrl: algoritmaUrutanImg,
    imageCaption: 'Ilustrasi jalur robot pada petak dan kartu instruksi berurutan di sisi kiri',
    text: 'Perhatikan gambar kartu instruksi panah di sebelah kiri papan petak. Jika robot yang sudah berada di tengah papan (kolom 2, baris 2) justru diberi perintah terus maju ke atas sebanyak 2 langkah lagi, apa yang akan terjadi?',
    options: [
      { id: 'A', text: 'Robot menabrak rintangan kerucut merah' },
      { id: 'B', text: 'Robot langsung mendapatkan bintang kuning' },
      { id: 'C', text: 'Robot kembali ke bendera hijau di pojok kiri bawah' },
      { id: 'D', text: 'Robot berubah warna menjadi kuning' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pada gambar terlihat garis putus-putus ke atas mengarah langsung ke kerucut merah di kolom 2 baris paling atas. Jika robot terus naik 2 petak, ia akan menabrak rintangan kerucut merah.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Berpikir Komputasional: Urutan Langkah (Sequence)',
    elemen: 'Algoritma & Pemrograman',
    difficulty: 'Sedang',
    text: 'Budi membuat algoritma untuk menyeduh teh manis hangat:\n1. Siapkan gelas dan sendok.\n2. Masukkan teh celup dan gula ke dalam gelas.\n3. Aduk hingga gula larut.\n4. Tuangkan air panas ke dalam gelas.\nKesalahan urutan (bug) pada algoritma Budi terdapat pada langkah nomor ....',
    options: [
      { id: 'A', text: 'Langkah 1 dan 2 karena gelas tidak perlu disiapkan' },
      { id: 'B', text: 'Langkah 3 dan 4 tertukar karena air panas harus dituang dulu sebelum diaduk' },
      { id: 'C', text: 'Langkah 2 harus dilakukan paling akhir setelah teh diminum' },
      { id: 'D', text: 'Tidak ada kesalahan karena gula bisa larut di gelas kosong tanpa air' },
    ],
    correctAnswer: 'B',
    explanation:
      'Dalam menyeduh teh, air panas harus dituangkan terlebih dahulu ke gelas agar teh dan gula bisa larut saat diaduk (langkah 4 sebelum langkah 3).',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Berpikir Komputasional: Urutan Langkah (Sequence)',
    elemen: 'Algoritma & Pemrograman',
    difficulty: 'Sukar',
    text: 'Dalam kegiatan membuat program animasi sederhana, Dayu ingin tokoh kucing berjalan maju 10 langkah, mengucapkan "Halo!", lalu melompat. Namun saat dijalankan, kucing melompat dulu baru berjalan. Tindakan mencari dan memperbaiki kesalahan urutan kode tersebut dinamakan ....',
    options: [
      { id: 'A', text: 'Debugging' },
      { id: 'B', text: 'Phishing' },
      { id: 'C', text: 'Downloading' },
      { id: 'D', text: 'Streaming' },
    ],
    correctAnswer: 'A',
    explanation:
      'Debugging adalah proses menemukan dan memperbaiki kesalahan (bug) dalam urutan instruksi atau kode program sehingga program berjalan sesuai rencana.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Berpikir Komputasional: Urutan Langkah (Sequence)',
    elemen: 'Algoritma & Pemrograman',
    difficulty: 'Sukar',
    text: 'Seorang siswa menyusun aturan lampu lalu lintas otomatis: (1) Lampu Merah menyala, (2) Lampu Kuning menyala sebentar, (3) Lampu Hijau menyala. Jika aturan diubah menjadi langsung menyalakan Lampu Merah dan Hijau secara bersamaan pada jalur yang berpotongan, akibat paling logis adalah ....',
    options: [
      { id: 'A', text: 'Kendaraan dari dua arah bisa bertabrakan karena instruksi tidak aman dan tidak berurutan' },
      { id: 'B', text: 'Semua kendaraan berjalan lebih cepat tanpa ada kemacetan' },
      { id: 'C', text: 'Lampu lalu lintas otomatis berubah menjadi biru' },
      { id: 'D', text: 'Pengendara tidak perlu memperhatikan rambu di jalan' },
    ],
    correctAnswer: 'A',
    explanation:
      'Algoritma sistem keselamatan seperti lampu lalu lintas harus disusun dengan urutan logis yang tepat agar tidak menimbulkan konflik atau kecelakaan.',
  },

  // --- BERPIKIR KOMPUTASIONAL & ALGORITMA: POLA & DEKOMPOSISI (SOAL 9 - 15) ---
  {
    id: 9,
    type: 'pg',
    topic: 'Berpikir Komputasional: Pola dan Dekomposisi',
    elemen: 'Berpikir Komputasional',
    difficulty: 'Mudah',
    imageUrl: polaDekomposisiImg,
    imageCaption: 'Ilustrasi pengenalan pola balok geometri di sisi kiri dan pemecahan komponen robot di sisi kanan',
    text: 'Perhatikan deretan balok pola di sisi kiri gambar di atas: Lingkaran Merah, Persegi Biru, Segitiga Kuning, Lingkaran Merah, Persegi Biru, dan kotak tanda tanya (?). Bentuk balok yang tepat untuk mengisi tanda tanya (?) adalah ....',
    options: [
      { id: 'A', text: 'Segitiga Kuning' },
      { id: 'B', text: 'Lingkaran Merah' },
      { id: 'C', text: 'Persegi Biru' },
      { id: 'D', text: 'Bintang Hijau' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pola yang berulang terdiri dari 3 bentuk berurutan: Lingkaran Merah -> Persegi Biru -> Segitiga Kuning. Setelah Lingkaran Merah dan Persegi Biru yang kedua, balok berikutnya adalah Segitiga Kuning.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Berpikir Komputasional: Pola dan Dekomposisi',
    elemen: 'Berpikir Komputasional',
    difficulty: 'Mudah',
    text: 'Memecah sebuah masalah besar yang rumit menjadi beberapa bagian kecil yang lebih mudah dipahami dan diselesaikan satu per satu dalam berpikir komputasional disebut ....',
    options: [
      { id: 'A', text: 'Dekomposisi' },
      { id: 'B', text: 'Perulangan tanpa henti' },
      { id: 'C', text: 'Enkripsi' },
      { id: 'D', text: 'Instalasi' },
    ],
    correctAnswer: 'A',
    explanation:
      'Dekomposisi (decomposition) adalah teknik memecah masalah atau tugas besar menjadi bagian-bagian kecil agar lebih mudah dikelola dan diselesaikan.',
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Berpikir Komputasional: Pola dan Dekomposisi',
    elemen: 'Berpikir Komputasional',
    difficulty: 'Sedang',
    imageUrl: polaDekomposisiImg,
    imageCaption: 'Robot dipecah menjadi empat bagian kecil: kepala, badan, lengan, dan roda',
    text: 'Perhatikan gambar robot di sisi kanan yang dipisahkan menjadi bagian kepala, badan, lengan, dan roda sebelum dirakit menjadi robot utuh. Konsep berpikir komputasional yang digambarkan oleh cara merakit robot tersebut adalah ....',
    options: [
      { id: 'A', text: 'Dekomposisi' },
      { id: 'B', text: 'Keamanan sandi' },
      { id: 'C', text: 'Pengiriman pesan' },
      { id: 'D', text: 'Filter kamera' },
    ],
    correctAnswer: 'A',
    explanation:
      'Memecah rancangan robot besar menjadi komponen kepala, badan, lengan, dan roda sehingga setiap bagian bisa dibuat lebih mudah merupakan contoh penerapan dekomposisi.',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Berpikir Komputasional: Pola dan Dekomposisi',
    elemen: 'Berpikir Komputasional',
    difficulty: 'Sedang',
    text: 'Kelas 6 akan mengadakan acara Pentas Seni sekolah. Agar persiapan rapi, ketua kelas membagi tugas menjadi tim dekorasi panggung, tim konsumsi, tim acara, dan tim kebersihan. Tindakan ketua kelas tersebut menerapkan prinsip ....',
    options: [
      { id: 'A', text: 'Dekomposisi tugas besar menjadi sub-tugas yang lebih kecil' },
      { id: 'B', text: 'Menghapus seluruh rencana pentas seni' },
      { id: 'C', text: 'Membiarkan semua siswa mengerjakan hal yang sama tanpa pembagian' },
      { id: 'D', text: 'Mengubah jadwal pentas seni menjadi permainan daring' },
    ],
    correctAnswer: 'A',
    explanation:
      'Membagi proyek besar Pentas Seni menjadi tim dekorasi, konsumsi, acara, dan kebersihan adalah contoh nyata dekomposisi dalam kehidupan sehari-hari.',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Berpikir Komputasional: Pola dan Dekomposisi',
    elemen: 'Berpikir Komputasional',
    difficulty: 'Sedang',
    text: 'Perhatikan pola bilangan berikut: 2, 5, 8, 11, 14, .... Dua bilangan berikutnya yang tepat sesuai pola tersebut adalah ....',
    options: [
      { id: 'A', text: '17 dan 20' },
      { id: 'B', text: '16 dan 18' },
      { id: 'C', text: '15 dan 19' },
      { id: 'D', text: '18 dan 22' },
    ],
    correctAnswer: 'A',
    explanation:
      'Aturan pola bilangan tersebut adalah selalu ditambah 3 dari bilangan sebelumnya (14 + 3 = 17, lalu 17 + 3 = 20).',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Berpikir Komputasional: Pola dan Dekomposisi',
    elemen: 'Berpikir Komputasional',
    difficulty: 'Sukar',
    text: 'Sinta ingin membuat program untuk menggambar 4 buah persegi yang sama persis berjajar ke samping. Saat mengamati langkah menggambar 1 persegi (maju 50 langkah, belok kanan 90 derajat) yang diulang 4 kali, Sinta menyadari adanya pola instruksi yang sama. Manfaat mengenali pola berulang tersebut dalam koding adalah ....',
    options: [
      { id: 'A', text: 'Kode program menjadi lebih singkat dan efisien menggunakan blok perulangan (loop)' },
      { id: 'B', text: 'Program harus ditulis ulang secara manual lebih panjang dari sebelumnya' },
      { id: 'C', text: 'Gambar persegi tidak bisa ditampilkan di layar komputer' },
      { id: 'D', text: 'Komputer akan menghapus seluruh gambar secara otomatis' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pengenalan pola (pattern recognition) membantu programmer meringkas instruksi yang berulang ke dalam blok perulangan (loop) sehingga program jauh lebih efisien.',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Berpikir Komputasional: Pola dan Dekomposisi',
    elemen: 'Berpikir Komputasional',
    difficulty: 'Sukar',
    text: 'Manakah contoh penerapan dekomposisi yang paling tepat saat kamu mendapat tugas membersihkan rumah yang sangat berantakan?',
    options: [
      { id: 'A', text: 'Membagi pekerjaan menjadi bagian kecil: merapikan meja belajar, menyapu lantai kamar, lalu mencuci piring di dapur' },
      { id: 'B', text: 'Mengeluh karena rumah terlalu luas dan tidak jadi membersihkan apa pun' },
      { id: 'C', text: 'Menyapu hanya satu sudut lantai berkali-kali sepanjang hari' },
      { id: 'D', text: 'Memindahkan seluruh barang ke halaman rumah agar tampak kosong' },
    ],
    correctAnswer: 'A',
    explanation:
      'Dekomposisi menyelesaikan masalah besar (rumah berantakan) dengan memecahnya menjadi tugas-tugas kecil per area/kegiatan agar selesai tuntas dan teratur.',
  },

  // --- LITERASI DIGITAL & PENGANTAR AI: KEAMANAN & ETIKA DIGITAL (SOAL 16 - 22) ---
  {
    id: 16,
    type: 'pg',
    topic: 'Literasi Digital: Keamanan & Etika Digital',
    elemen: 'Literasi & Etika Digital',
    difficulty: 'Mudah',
    imageUrl: keamananDigitalImg,
    imageCaption: 'Siswi dilindungi perisai keamanan digital yang menjaga alamat rumah, kata sandi, dan kartu identitas',
    text: 'Perhatikan gambar di atas. Ikon rumah, kunci, dan kartu identitas yang berada di dalam perisai perlindungan gembok emas melambangkan data pribadi yang harus kita jaga kerahasiaannya di internet. Contoh informasi pribadi yang TIDAK boleh disebarkan sembarangan ke publik adalah ....',
    options: [
      { id: 'A', text: 'Alamat rumah lengkap, kata sandi (password), dan nomor telepon pribadi' },
      { id: 'B', text: 'Nama tokoh kartun kesukaan dan warna favorit' },
      { id: 'C', text: 'Judul buku cerita rakyat yang baru dibaca di perpustakaan' },
      { id: 'D', text: 'Nama mata pelajaran yang dipelajari di sekolah dasar' },
    ],
    correctAnswer: 'A',
    explanation:
      'Data sensitif seperti alamat rumah, kata sandi akun, nomor telepon, dan nomor identitas pribadi wajib dijaga rapat agar tidak disalahgunakan oleh pihak tidak bertanggung jawab.',
  },
  {
    id: 17,
    type: 'pg',
    topic: 'Literasi Digital: Keamanan & Etika Digital',
    elemen: 'Literasi & Etika Digital',
    difficulty: 'Mudah',
    text: 'Kata sandi (password) yang kuat untuk melindungi akun belajar atau email kita sebaiknya dibuat dengan cara ....',
    options: [
      { id: 'A', text: 'Menggunakan kombinasi huruf besar, huruf kecil, angka, dan simbol yang sulit ditebak' },
      { id: 'B', text: 'Menggunakan tanggal lahir atau angka berurutan seperti "123456"' },
      { id: 'C', text: 'Memakai nama lengkap sendiri agar mudah diingat orang lain' },
      { id: 'D', text: 'Menuliskannya di papan pengumuman kelas agar teman bisa membantu login' },
    ],
    correctAnswer: 'A',
    explanation:
      'Password yang kuat memadukan huruf besar, huruf kecil, angka, dan simbol, serta tidak menggunakan data pribadi yang mudah ditebak seperti tanggal lahir atau "123456".',
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Literasi Digital: Keamanan & Etika Digital',
    elemen: 'Literasi & Etika Digital',
    difficulty: 'Sedang',
    imageUrl: keamananDigitalImg,
    imageCaption: 'Tanda berhenti berwarna merah memblokir pesan amplop mencurigakan di internet',
    text: 'Perhatikan tanda berhenti (stop) yang memblokir amplop mencurigakan pada gambar di atas. Suatu hari, Made menerima pesan dari nomor tidak dikenal berisi tautan (link) hadiah ponsel gratis yang memintanya memasukkan kata sandi akun orang tuanya. Sikap paling aman yang harus dilakukan Made adalah ....',
    options: [
      { id: 'A', text: 'Tidak mengeklik tautan tersebut, menutup pesan, dan segera melapor kepada orang tua atau guru' },
      { id: 'B', text: 'Langsung mengisi kata sandi agar cepat mendapat hadiah gratis' },
      { id: 'C', text: 'Meneruskan tautan hadiah tersebut ke seluruh grup kelas' },
      { id: 'D', text: 'Membalas pesan dengan mengirimkan foto kartu identitas keluarga' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pesan iming-iming hadiah yang meminta kata sandi atau data pribadi adalah penipuan (phishing). Jangan pernah mengeklik tautannya dan segera laporkan kepada orang dewasa tepercaya.',
  },
  {
    id: 19,
    type: 'pg',
    topic: 'Literasi Digital: Keamanan & Etika Digital',
    elemen: 'Literasi & Etika Digital',
    difficulty: 'Sedang',
    text: 'Ketika berdiskusi di grup chat kelas atau menulis komentar di media sosial, sikap yang mencerminkan etika digital (netiket) yang baik adalah ....',
    options: [
      { id: 'A', text: 'Menggunakan bahasa yang sopan, menghargai pendapat teman, dan tidak menyebar ejekan' },
      { id: 'B', text: 'Menulis komentar menggunakan huruf kapital semua untuk memarahi teman' },
      { id: 'C', text: 'Mengirimkan foto aib teman agar ditertawakan bersama di grup' },
      { id: 'D', text: 'Menyebarkan berita yang belum pasti kebenarannya tanpa memeriksa fakta' },
    ],
    correctAnswer: 'A',
    explanation:
      'Etika digital menuntut kita untuk berkomunikasi dengan santun, menghormati privasi orang lain, serta menghindari perundungan siber (cyberbullying) dan hoaks.',
  },
  {
    id: 20,
    type: 'pg',
    topic: 'Literasi Digital: Keamanan & Etika Digital',
    elemen: 'Literasi & Etika Digital',
    difficulty: 'Sedang',
    text: 'Jika kamu menemukan gambar atau tulisan karya orang lain di internet dan ingin menggunakannya dalam tugas presentasi sekolah, tindakan yang paling beretika adalah ....',
    options: [
      { id: 'A', text: 'Mencantumkan sumber atau nama pembuat karya tersebut sebagai bentuk penghargaan' },
      { id: 'B', text: 'Menghapus nama penciptanya lalu mengakuinya sebagai karya buatan sendiri' },
      { id: 'C', text: 'Mengubah sedikit warnanya lalu menjualnya secara online tanpa izin' },
      { id: 'D', text: 'Menyalin seluruh isi artikel tanpa membaca dan tanpa menyebutkan sumber' },
    ],
    correctAnswer: 'A',
    explanation:
      'Menghargai hak cipta karya digital dilakukan dengan menyebutkan sumber atau nama pembuat aslinya serta tidak melakukan plagiarisme.',
  },
  {
    id: 21,
    type: 'pg',
    topic: 'Literasi Digital: Keamanan & Etika Digital',
    elemen: 'Literasi & Etika Digital',
    difficulty: 'Sukar',
    text: 'Raka melihat berita di internet yang menyatakan besok seluruh sekolah di Indonesia diliburkan mendadak karena hujan, namun judul berita tersebut sangat sensasional dan tidak berasal dari situs resmi dinas pendidikan. Langkah literasi digital yang paling bijak sebelum membagikan berita itu adalah ....',
    options: [
      { id: 'A', text: 'Memeriksa kebenaran informasi (cek fakta) ke sumber resmi sekolah atau guru sebelum membagikan' },
      { id: 'B', text: 'Segera menyebarkannya ke grup keluarga supaya menjadi orang pertama yang tahu' },
      { id: 'C', text: 'Mempercayai berita karena sudah disukai banyak akun anonim' },
      { id: 'D', text: 'Menyimpan gambarnya lalu mengunggah ulang sebagai pengumuman resmi' },
    ],
    correctAnswer: 'A',
    explanation:
      'Sebelum menyebarkan informasi di internet, kita harus melakukan cek fakta (verifikasi) melalui sumber resmi atau tepercaya agar tidak ikut menyebarkan berita bohong (hoaks).',
  },
  {
    id: 22,
    type: 'pg',
    topic: 'Literasi Digital: Keamanan & Etika Digital',
    elemen: 'Literasi & Etika Digital',
    difficulty: 'Sukar',
    text: 'Setiap aktivitas yang kita lakukan di internet—seperti komentar yang kita tulis, foto yang kita unggah, dan riwayat pencarian—akan meninggalkan catatan yang disebut ....',
    options: [
      { id: 'A', text: 'Jejak digital (digital footprint)' },
      { id: 'B', text: 'Perangkat keras (hardware)' },
      { id: 'C', text: 'Algoritma pemrograman' },
      { id: 'D', text: 'Memori baterai' },
    ],
    correctAnswer: 'A',
    explanation:
      'Jejak digital adalah rekam jejak data dari seluruh aktivitas seseorang di internet yang sulit dihapus sepenuhnya, sehingga kita harus selalu bersikap bijak saat online.',
  },

  // --- LITERASI DIGITAL & PENGANTAR AI: DASAR AI & SIMULASI CHATBOT (SOAL 23 - 30) ---
  {
    id: 23,
    type: 'pg',
    topic: 'Pengantar AI: Dasar Kecerdasan Artifisial & Chatbot',
    elemen: 'Kecerdasan Artifisial (AI)',
    difficulty: 'Mudah',
    imageUrl: aiFilterRekomendasiImg,
    imageCaption: 'Penggunaan filter kamera AR telinga kucing dan sistem rekomendasi buku, musik, serta video oleh AI',
    text: 'Perhatikan gambar di atas. Anak pada gambar menggunakan filter telinga dan kumis kucing pada kamera tabletnya serta mendapatkan saran buku dan video sains yang sesuai minatnya. Teknologi yang membuat komputer atau aplikasi dapat mengenali wajah dan memberi rekomendasi pintar tersebut adalah ....',
    options: [
      { id: 'A', text: 'Kecerdasan Artifisial (Artificial Intelligence / AI)' },
      { id: 'B', text: 'Kabel listrik bertegangan tinggi' },
      { id: 'C', text: 'Papan ketik mekanik biasa' },
      { id: 'D', text: 'Printer cetak hitam putih' },
    ],
    correctAnswer: 'A',
    explanation:
      'Filter kamera AR yang mendeteksi titik wajah secara otomatis dan sistem rekomendasi konten merupakan contoh nyata penerapan Kecerdasan Artifisial (AI) di sekitar kita.',
  },
  {
    id: 24,
    type: 'pg',
    topic: 'Pengantar AI: Dasar Kecerdasan Artifisial & Chatbot',
    elemen: 'Kecerdasan Artifisial (AI)',
    difficulty: 'Mudah',
    text: 'Manakah di bawah ini yang merupakan contoh penerapan Kecerdasan Artifisial (AI) yang sering kita temui dalam kehidupan sehari-hari?',
    options: [
      { id: 'A', text: 'Asisten suara pintar yang menjawab pertanyaan dan sistem rekomendasi video di aplikasi' },
      { id: 'B', text: 'Penggaris kayu yang digunakan untuk mengukur panjang buku tulis' },
      { id: 'C', text: 'Penghapus karet untuk membersihkan tulisan pensil di kertas' },
      { id: 'D', text: 'Jam dinding mekanis yang menggunakan jarum biasa' },
    ],
    correctAnswer: 'A',
    explanation:
      'Asisten suara (seperti pengenal ucapan), filter kamera wajah, penerjemah bahasa otomatis, dan sistem rekomendasi tontonan/musik adalah contoh AI di sekitar kita.',
  },
  {
    id: 25,
    type: 'pg',
    topic: 'Pengantar AI: Dasar Kecerdasan Artifisial & Chatbot',
    elemen: 'Kecerdasan Artifisial (AI)',
    difficulty: 'Sedang',
    imageUrl: aiFilterRekomendasiImg,
    imageCaption: 'Ilustrasi sistem rekomendasi AI yang menyarankan buku, musik, dan video sains',
    text: 'Saat Putu sering menonton video tentang eksperimen sains dan luar angkasa, beranda aplikasinya mulai sering menampilkan saran video serupa secara otomatis. Cara kerja sistem rekomendasi AI pada gambar di atas adalah ....',
    options: [
      { id: 'A', text: 'AI mempelajari pola riwayat tontonan dan kesukaan pengguna untuk menyarankan konten yang relevan' },
      { id: 'B', text: 'AI meminta teman sekelas memilihkan video secara diam-diam' },
      { id: 'C', text: 'AI mengacak seluruh video di dunia tanpa melihat riwayat pengguna' },
      { id: 'D', text: 'AI hanya menampilkan satu video yang sama untuk semua orang di bumi' },
    ],
    correctAnswer: 'A',
    explanation:
      'Sistem rekomendasi AI bekerja dengan menganalisis pola data aktivitas dan preferensi pengguna (seperti riwayat tontonan atau bacaan) agar saran yang muncul sesuai minatnya.',
  },
  {
    id: 26,
    type: 'pg',
    topic: 'Pengantar AI: Dasar Kecerdasan Artifisial & Chatbot',
    elemen: 'Kecerdasan Artifisial (AI)',
    difficulty: 'Sedang',
    text: 'Dalam aplikasi pembelajaran atau layanan informasi, program komputer berbasis AI yang dirancang dapat melakukan percakapan tanya-jawab melalui teks atau suara dengan pengguna disebut ....',
    options: [
      { id: 'A', text: 'Chatbot' },
      { id: 'B', text: 'Spreadsheet' },
      { id: 'C', text: 'Antivirus' },
      { id: 'D', text: 'Proyektor' },
    ],
    correctAnswer: 'A',
    explanation:
      'Chatbot adalah program komputer atau AI yang mampu mensimulasikan percakapan dengan manusia secara interaktif melalui teks maupun suara.',
  },
  {
    id: 27,
    type: 'pg',
    topic: 'Pengantar AI: Dasar Kecerdasan Artifisial & Chatbot',
    elemen: 'Kecerdasan Artifisial (AI)',
    difficulty: 'Sedang',
    imageUrl: aiLatihChatbotImg,
    imageCaption: 'Siswi melatih model AI dengan memasukkan kartu gambar kucing dan anjing ke keranjang berlabel CAT dan DOG',
    text: 'Perhatikan gambar simulasi melatih model AI di atas. Siswi memasukkan berbagai kartu gambar kucing ke keranjang berlabel CAT dan kartu gambar anjing ke keranjang berlabel DOG agar robot belajar membedakannya. Tahap memasukkan contoh-contoh berlabel ke dalam sistem AI tersebut disebut ....',
    options: [
      { id: 'A', text: 'Melatih model (training) dengan data latih' },
      { id: 'B', text: 'Mematikan sistem komputer (shutdown)' },
      { id: 'C', text: 'Menghapus seluruh foto di kamera' },
      { id: 'D', text: 'Mencetak poster menggunakan kertas warna' },
    ],
    correctAnswer: 'A',
    explanation:
      'Agar model AI dapat mengenali pola dan membedakan objek (seperti kucing dan anjing), manusia perlu melatihnya terlebih dahulu menggunakan banyak contoh data berlabel (training data).',
  },
  {
    id: 28,
    type: 'pg',
    topic: 'Pengantar AI: Dasar Kecerdasan Artifisial & Chatbot',
    elemen: 'Kecerdasan Artifisial (AI)',
    difficulty: 'Sukar',
    imageUrl: aiLatihChatbotImg,
    imageCaption: 'Simulasi melatih model AI pengenal gambar dengan contoh data berlabel',
    text: 'Jika pada simulasi melatih model AI seperti pada gambar di atas, seorang siswa hanya memberikan 1 foto kucing berwarna putih saja di keranjang CAT, lalu mengujinya dengan foto kucing berwarna hitam, kemungkinan besar model AI tersebut akan kesulitan mengenalinya. Hal itu terjadi karena ....',
    options: [
      { id: 'A', text: 'Data latih yang diberikan terlalu sedikit dan kurang beragam variasi bentuk maupun warnanya' },
      { id: 'B', text: 'Robot AI tidak menyukai hewan peliharaan berwarna gelap' },
      { id: 'C', text: 'Kabel penghubung keranjang tidak memakai baterai ponsel' },
      { id: 'D', text: 'Model AI selalu menolak gambar yang dikirim pada siang hari' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kualitas dan ketepatan prediksi model AI sangat bergantung pada jumlah dan keberagaman data latih. Semakin beragam contoh yang diberikan saat pelatihan, semakin pintar model mengenalinya.',
  },
  {
    id: 29,
    type: 'pg',
    topic: 'Pengantar AI: Dasar Kecerdasan Artifisial & Chatbot',
    elemen: 'Kecerdasan Artifisial (AI)',
    difficulty: 'Sukar',
    text: 'Lani membuat simulasi chatbot ramah anak untuk membantu siswa SD mencari info jadwal pelajaran dan aturan perpustakaan. Prinsip paling penting saat merancang chatbot ramah anak adalah ....',
    options: [
      { id: 'A', text: 'Menggunakan bahasa yang santun, aman, mudah dipahami anak, dan tidak meminta data pribadi rahasia' },
      { id: 'B', text: 'Meminta anak menuliskan alamat rumah dan nomor rekening orang tua sebelum bertanya' },
      { id: 'C', text: 'Memberikan jawaban yang kasar dan membingungkan jika pengguna salah mengetik' },
      { id: 'D', text: 'Menampilkan iklan berbahaya dan tautan acak yang tidak relevan dengan pelajaran' },
    ],
    correctAnswer: 'A',
    explanation:
      'Chatbot ramah anak harus dirancang dengan bahasa yang sopan, edukatif, aman dari konten negatif, serta melindungi privasi anak tanpa meminta data pribadi sensitif.',
  },
  {
    id: 30,
    type: 'pg',
    topic: 'Pengantar AI: Dasar Kecerdasan Artifisial & Chatbot',
    elemen: 'Kecerdasan Artifisial (AI)',
    difficulty: 'Sukar',
    text: 'Ketika menggunakan asisten AI atau chatbot untuk membantu belajar di rumah, sikap yang paling tepat dan bertanggung jawab adalah ....',
    options: [
      { id: 'A', text: 'Menjadikan AI sebagai teman diskusi untuk memahami konsep, lalu memeriksa ulang kebenaran jawabannya' },
      { id: 'B', text: 'Menyalin seluruh jawaban AI tanpa membaca dan mengumpulkannya mentah-mentah' },
      { id: 'C', text: 'Mempercayai 100% semua ucapan chatbot tanpa pernah mengecek ke buku pelajaran atau guru' },
      { id: 'D', text: 'Memasukkan kata sandi akun bank keluarga ke dalam kolom chat AI' },
    ],
    correctAnswer: 'A',
    explanation:
      'AI bisa saja membuat kekeliruan informasi. Siswa yang bijak menggunakan AI sebagai alat bantu belajar, tetap berpikir kritis memeriksa kebenarannya, dan menjaga privasi data.',
  },

  // =========================================================================
  // PILIHAN GANDA KOMPLEKS / PGK (31 - 35) : 3 OPSI (A - C), >1 JAWABAN BENAR
  // =========================================================================

  {
    id: 31,
    type: 'pgk',
    topic: 'Berpikir Komputasional: Urutan Langkah (Sequence)',
    elemen: 'Algoritma & Pemrograman',
    difficulty: 'Sedang',
    imageUrl: algoritmaUrutanImg,
    imageCaption: 'Papan petak navigasi robot dan kartu urutan langkah instruksi',
    text: 'Perhatikan gambar papan petak robot di atas. Pilihlah SEMUA pernyataan yang BENAR mengenai konsep urutan langkah (sequence) dan algoritma! (Jawaban benar lebih dari satu)',
    options: [
      { id: 'A', text: 'Urutan instruksi yang logis membantu robot mencapai bintang kuning tanpa menabrak rintangan' },
      { id: 'B', text: 'Jika urutan instruksi tertukar, arah gerak robot bisa melenceng atau menabrak kerucut merah' },
      { id: 'C', text: 'Robot dapat tiba di tujuan dengan benar meskipun tidak diberi instruksi urutan langkah apa pun' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Pernyataan A dan B benar: algoritma membutuhkan urutan instruksi yang tepat agar berhasil mencapai tujuan tanpa menabrak rintangan. Tanpa instruksi yang tepat, robot tidak akan bergerak menuju target.',
  },
  {
    id: 32,
    type: 'pgk',
    topic: 'Berpikir Komputasional: Pola dan Dekomposisi',
    elemen: 'Berpikir Komputasional',
    difficulty: 'Sedang',
    imageUrl: polaDekomposisiImg,
    imageCaption: 'Pengenalan pola bentuk geometri dan dekomposisi bagian-bagian robot',
    text: 'Perhatikan gambar pengenalan pola dan dekomposisi di atas. Pilihlah SEMUA pernyataan yang TEPAT berdasarkan gambar tersebut! (Jawaban benar lebih dari satu)',
    options: [
      { id: 'A', text: 'Deretan balok di sebelah kiri menunjukkan pola berulang Lingkaran Merah, Persegi Biru, Segitiga Kuning' },
      { id: 'B', text: 'Memisahkan robot menjadi kepala, badan, lengan, dan roda merupakan contoh teknik dekomposisi' },
      { id: 'C', text: 'Dekomposisi bertujuan membuat masalah kecil menjadi jauh lebih rumit dan sulit dikerjakan' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Pernyataan A dan B benar. Pernyataan C salah karena dekomposisi justru bertujuan menyederhanakan masalah besar menjadi bagian kecil agar lebih mudah diselesaikan.',
  },
  {
    id: 33,
    type: 'pgk',
    topic: 'Berpikir Komputasional: Pola dan Dekomposisi',
    elemen: 'Berpikir Komputasional',
    difficulty: 'Sedang',
    text: 'Dalam aktivitas sehari-hari, kita sering menerapkan berpikir komputasional. Pilihlah SEMUA kegiatan berikut yang merupakan penerapan pola atau dekomposisi! (Jawaban benar lebih dari satu)',
    options: [
      { id: 'A', text: 'Membagi tugas piket kelas menjadi bagian menyapu lantai, menghapus papan tulis, dan merapikan meja' },
      { id: 'B', text: 'Mengetahui seragam sekolah yang harus dipakai besok dengan melihat jadwal berulang setiap minggu' },
      { id: 'C', text: 'Membuka tautan hadiah palsu dari orang asing tanpa bertanya kepada orang tua' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Membagi tugas piket adalah contoh dekomposisi (A), dan mengenali jadwal seragam mingguan yang berulang adalah pengenalan pola (B). Opsi C adalah tindakan tidak aman di internet.',
  },
  {
    id: 34,
    type: 'pgk',
    topic: 'Literasi Digital: Keamanan & Etika Digital',
    elemen: 'Literasi & Etika Digital',
    difficulty: 'Sedang',
    imageUrl: keamananDigitalImg,
    imageCaption: 'Ilustrasi perlindungan data pribadi dan sikap bijak menghadapi pesan mencurigakan',
    text: 'Perhatikan gambar keamanan digital di atas. Pilihlah SEMUA perilaku aman dan beretika saat menggunakan internet! (Jawaban benar lebih dari satu)',
    options: [
      { id: 'A', text: 'Menjaga kerahasiaan kata sandi (password), alamat rumah, dan nomor identitas pribadi' },
      { id: 'B', text: 'Memblokir atau mengabaikan pesan tautan mencurigakan dan melaporkannya ke orang tua/guru' },
      { id: 'C', text: 'Menulis komentar kasar kepada teman di grup kelas agar terlihat paling hebat' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Menjaga data pribadi (A) dan mewaspadai pesan mencurigakan/phishing (B) adalah langkah keamanan digital yang benar. Menulis komentar kasar (C) melanggar etika digital.',
  },
  {
    id: 35,
    type: 'pgk',
    topic: 'Pengantar AI: Dasar Kecerdasan Artifisial & Chatbot',
    elemen: 'Kecerdasan Artifisial (AI)',
    difficulty: 'Sukar',
    imageUrl: aiLatihChatbotImg,
    imageCaption: 'Simulasi melatih model AI dengan kartu berlabel dan chatbot ramah anak',
    text: 'Perhatikan gambar simulasi melatih model AI dan chatbot di atas. Pilihlah SEMUA pernyataan yang BENAR tentang cara kerja dan etika penggunaan AI! (Jawaban benar lebih dari satu)',
    options: [
      { id: 'A', text: 'Model AI belajar mengenali objek dengan cara dilatih menggunakan banyak data contoh yang diberi label' },
      { id: 'B', text: 'Chatbot ramah anak harus memberikan jawaban yang sopan, aman, serta menjaga privasi penggunanya' },
      { id: 'C', text: 'AI mampu berpikir dan merasakan emosi persis seperti makhluk hidup tanpa perlu data atau program' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Pernyataan A dan B benar. Pernyataan C salah karena AI adalah program komputer yang bekerja berdasarkan data dan algoritma, bukan makhluk hidup yang memiliki kesadaran atau perasaan.',
  },

  // =========================================================================
  // PILIHAN GANDA KOMPLEKS KATEGORI (36 - 40) : 3 PERNYATAAN BENAR / SALAH
  // =========================================================================

  {
    id: 36,
    type: 'pgk_kategori',
    topic: 'Berpikir Komputasional: Urutan Langkah (Sequence)',
    elemen: 'Algoritma & Pemrograman',
    difficulty: 'Sedang',
    imageUrl: algoritmaUrutanImg,
    imageCaption: 'Papan petak navigasi robot dengan bendera hijau, bintang kuning, dan kerucut merah',
    text: 'Perhatikan gambar papan petak algoritma di atas. Tentukan apakah setiap pernyataan mengenai urutan langkah (sequence) berikut bernilai BENAR atau SALAH!',
    statements: [
      {
        id: 's1',
        text: 'Algoritma adalah urutan langkah-langkah logis dan sistematis untuk menyelesaikan suatu masalah.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Dalam menyusun algoritma, urutan langkah boleh ditukar sesuka hati karena hasilnya selalu sama.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Mencari dan memperbaiki kesalahan urutan instruksi pada program disebut proses debugging.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 dan 3 benar. Pernyataan 2 salah karena urutan instruksi (sequence) sangat menentukan hasil akhir program; jika ditukar, hasilnya bisa salah atau error.',
  },
  {
    id: 37,
    type: 'pgk_kategori',
    topic: 'Berpikir Komputasional: Pola dan Dekomposisi',
    elemen: 'Berpikir Komputasional',
    difficulty: 'Sedang',
    text: 'Bacalah dengan cermat setiap pernyataan mengenai konsep Pola dan Dekomposisi dalam berpikir komputasional berikut, lalu tentukan BENAR atau SALAH!',
    statements: [
      {
        id: 's1',
        text: 'Dekomposisi membantu kita menyelesaikan masalah yang besar dan rumit dengan cara memecahnya menjadi bagian-bagian kecil.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Pada pola huruf berulang A - B - C - A - B - C - A - ..., huruf berikutnya setelah A adalah C.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Mengenali pola yang berulang dapat membuat penulisan kode program menjadi lebih singkat dan efisien.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 dan 3 benar. Pernyataan 2 salah karena pola yang berulang adalah A-B-C, sehingga huruf setelah A adalah B (bukan C).',
  },
  {
    id: 38,
    type: 'pgk_kategori',
    topic: 'Literasi Digital: Keamanan & Etika Digital',
    elemen: 'Literasi & Etika Digital',
    difficulty: 'Sedang',
    imageUrl: keamananDigitalImg,
    imageCaption: 'Siswi menjaga data pribadi di balik perisai keamanan digital dan menolak pesan mencurigakan',
    text: 'Perhatikan gambar keamanan dan etika digital di atas. Tentukan apakah setiap pernyataan mengenai perilaku berinternet berikut bernilai BENAR atau SALAH!',
    statements: [
      {
        id: 's1',
        text: 'Kata sandi (password) akun pribadi boleh dibagikan kepada teman akrab agar bisa saling membantu login.',
        correctAnswer: false,
      },
      {
        id: 's2',
        text: 'Mencantumkan sumber atau nama pencipta saat menggunakan gambar dari internet merupakan wujud etika digital.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Menolak mengeklik tautan mencurigakan dan melaporkannya ke orang tua dapat melindungi kita dari penipuan (phishing).',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 salah karena kata sandi bersifat rahasia dan tidak boleh dibagikan kepada siapa pun kecuali orang tua/wali bila diperlukan. Pernyataan 2 dan 3 benar.',
  },
  {
    id: 39,
    type: 'pgk_kategori',
    topic: 'Pengantar AI: Dasar Kecerdasan Artifisial & Chatbot',
    elemen: 'Kecerdasan Artifisial (AI)',
    difficulty: 'Sukar',
    imageUrl: aiFilterRekomendasiImg,
    imageCaption: 'Contoh AI sehari-hari berupa filter kamera wajah dan sistem rekomendasi konten',
    text: 'Perhatikan gambar penerapan AI dalam kehidupan sehari-hari di atas. Tentukan apakah setiap pernyataan berikut bernilai BENAR atau SALAH!',
    statements: [
      {
        id: 's1',
        text: 'Filter kamera yang dapat mendeteksi posisi mata, hidung, dan mulut untuk memasang stiker wajah merupakan contoh teknologi AI.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Sistem rekomendasi pada aplikasi belajar atau video memanfaatkan data kebiasaan pengguna untuk memberi saran yang sesuai.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Kalkulator saku sederhana yang hanya menghitung 2 + 2 merupakan contoh Kecerdasan Artifisial (AI) yang bisa belajar sendiri.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan 1 dan 2 benar karena filter wajah AR dan sistem rekomendasi memanfaatkan kecerdasan artifisial. Pernyataan 3 salah karena kalkulator biasa hanya menjalankan rumus hitungan tetap tanpa belajar dari data.',
  },
  {
    id: 40,
    type: 'pgk_kategori',
    topic: 'Pengantar AI: Dasar Kecerdasan Artifisial & Chatbot',
    elemen: 'Kecerdasan Artifisial (AI)',
    difficulty: 'Sukar',
    imageUrl: aiLatihChatbotImg,
    imageCaption: 'Siswi melatih model AI pengenal gambar dan merancang respon chatbot ramah anak',
    text: 'Perhatikan gambar simulasi melatih model AI dan chatbot ramah anak di atas. Tentukan apakah setiap pernyataan berikut bernilai BENAR atau SALAH!',
    statements: [
      {
        id: 's1',
        text: 'Semakin banyak dan beragam contoh data berlabel yang diberikan saat melatih model AI, semakin akurat hasil pengenalannya.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Jawaban yang diberikan oleh chatbot AI tidak perlu diperiksa lagi kebenarannya karena AI mustahil melakukan kesalahan.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Chatbot ramah anak dirancang agar merespons dengan sopan, edukatif, dan tidak meminta data pribadi yang membahayakan anak.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 dan 3 benar. Pernyataan 2 salah karena AI bisa keliru atau menghasilkan jawaban kurang tepat sehingga pengguna harus tetap berpikir kritis dan memverifikasi informasinya.',
  },
];
