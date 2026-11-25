import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase C (Kelas 6) Mata Pelajaran KODING
 * Lingkup Materi:
 * 1. Berpikir Komputasional & Algoritma:
 *    - Urutan langkah (sequence): Menyusun instruksi logis untuk menyelesaikan masalah sehari-hari
 *    - Pola dan dekomposisi: Memecah masalah besar menjadi bagian kecil serta mengenali pola yang berulang
 * 2. Literasi Digital & Pengantar AI:
 *    - Keamanan & etika digital: Menjaga informasi pribadi, bersikap bijak di internet, etika teknologi
 *    - Dasar kecerdasan artifisial (AI): Contoh AI di sekitar (filter kamera, sistem rekomendasi) & simulasi melatih model/chatbot ramah anak
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 40 butir soal KODING (30 PG, 5 PGK, 5 PGK Kategori)
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Algoritma & Pemrograman',
    tujuanPembelajaran:
      'Peserta didik mampu menyusun urutan langkah (sequence) instruksi logis untuk memindahkan objek menuju tujuan.',
    indikatorSoal:
      'Disajikan gambar papan petak navigasi robot dari bendera hijau ke bintang kuning dengan rintangan, peserta didik dapat menentukan urutan langkah yang tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Algoritma & Pemrograman',
    tujuanPembelajaran:
      'Peserta didik memahami pengertian algoritma sebagai urutan langkah penyelesaian masalah.',
    indikatorSoal:
      'Peserta didik dapat mengidentifikasi istilah algoritma untuk sekumpulan langkah logis yang disusun secara runtut.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Algoritma & Pemrograman',
    tujuanPembelajaran:
      'Peserta didik mampu menyusun instruksi logis kegiatan sehari-hari secara berurutan (sequence).',
    indikatorSoal:
      'Disajikan 4 langkah acak kegiatan menyikat gigi, peserta didik dapat mengurutkan sequence yang benar.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Algoritma & Pemrograman',
    tujuanPembelajaran:
      'Peserta didik memahami alasan pentingnya urutan instruksi yang tepat dalam pemrograman komputer.',
    indikatorSoal:
      'Peserta didik dapat menjelaskan bahwa komputer mengeksekusi perintah secara berurutan sesuai instruksi yang diberikan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Algoritma & Pemrograman',
    tujuanPembelajaran:
      'Peserta didik mampu menelusuri dampak perubahan urutan instruksi pada simulasi pergerakan robot.',
    indikatorSoal:
      'Disajikan gambar papan petak robot dan kartu instruksi, peserta didik dapat memprediksi akibat jika robot terus bergerak maju melewati batas jalur.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Algoritma & Pemrograman',
    tujuanPembelajaran:
      'Peserta didik mampu menemukan kesalahan urutan langkah (bug) dalam algoritma kegiatan sehari-hari.',
    indikatorSoal:
      'Disajikan algoritma menyeduh teh manis yang tertukar langkahnya, peserta didik dapat menentukan bagian urutan yang keliru.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Algoritma & Pemrograman',
    tujuanPembelajaran:
      'Peserta didik memahami proses perbaikan kesalahan urutan kode dalam pemrograman sederhana.',
    indikatorSoal:
      'Disajikan ilustrasi animasi yang berjalan tidak sesuai urutan perintah, peserta didik dapat menentukan istilah proses debugging (HOTS).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Algoritma & Pemrograman',
    tujuanPembelajaran:
      'Peserta didik mengevaluasi akibat kegagalan urutan algoritma pada sistem nyata di lingkungan sekitar.',
    indikatorSoal:
      'Disajikan skenario pengubahan urutan lampu lalu lintas secara bersamaan, peserta didik dapat menganalisis dampak logis yang ditimbulkan (HOTS).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Berpikir Komputasional',
    tujuanPembelajaran:
      'Peserta didik mampu mengenali pola bentuk geometri yang berulang secara visual.',
    indikatorSoal:
      'Disajikan gambar deretan balok pola berulang dengan tanda tanya (?), peserta didik dapat menentukan bentuk balok pelengkap yang tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Berpikir Komputasional',
    tujuanPembelajaran:
      'Peserta didik memahami konsep dekomposisi dalam memecah masalah besar menjadi bagian kecil.',
    indikatorSoal:
      'Peserta didik dapat mengidentifikasi pengertian dekomposisi dalam berpikir komputasional.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Berpikir Komputasional',
    tujuanPembelajaran:
      'Peserta didik mampu menghubungkan ilustrasi visual pemecahan komponen objek dengan konsep dekomposisi.',
    indikatorSoal:
      'Disajikan gambar robot yang dipecah menjadi kepala, badan, lengan, dan roda, peserta didik dapat menentukan prinsip berpikir komputasional yang diterapkan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Berpikir Komputasional',
    tujuanPembelajaran:
      'Peserta didik mampu menerapkan dekomposisi dalam mengorganisasi kegiatan kelompok di sekolah.',
    indikatorSoal:
      'Disajikan ilustrasi pembagian tim persiapan Pentas Seni kelas, peserta didik dapat mengidentifikasi penerapan prinsip dekomposisi.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Berpikir Komputasional',
    tujuanPembelajaran:
      'Peserta didik mampu mengidentifikasi aturan pola bilangan sederhana.',
    indikatorSoal:
      'Disajikan barisan bilangan dengan selisih tetap, peserta didik dapat menentukan dua bilangan lanjutan sesuai pola.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Berpikir Komputasional',
    tujuanPembelajaran:
      'Peserta didik menganalisis manfaat pengenalan pola berulang dalam meringkas instruksi program.',
    indikatorSoal:
      'Disajikan kasus menggambar 4 persegi yang sama dalam koding, peserta didik dapat menyimpulkan manfaat pola berulang dengan blok loop (HOTS).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Berpikir Komputasional',
    tujuanPembelajaran:
      'Peserta didik memilih strategi pemecahan masalah berbasis dekomposisi pada situasi kehidupan nyata.',
    indikatorSoal:
      'Disajikan permasalahan rumah berantakan, peserta didik dapat menentukan langkah dekomposisi yang paling efektif (HOTS).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Literasi & Etika Digital',
    tujuanPembelajaran:
      'Peserta didik mengenali jenis informasi pribadi yang harus dilindungi kerahasiaannya di internet.',
    indikatorSoal:
      'Disajikan gambar ilustrasi perisai data pribadi (rumah, kunci, identitas), peserta didik dapat menentukan data pribadi yang tidak boleh disebarkan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Literasi & Etika Digital',
    tujuanPembelajaran:
      'Peserta didik memahami cara membuat kata sandi (password) yang kuat untuk keamanan akun.',
    indikatorSoal:
      'Peserta didik dapat memilih ciri pembuatan kata sandi yang aman menggunakan kombinasi karakter.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Literasi & Etika Digital',
    tujuanPembelajaran:
      'Peserta didik mampu bersikap waspada dan aman terhadap pesan penipuan (phishing) di internet.',
    indikatorSoal:
      'Disajikan gambar pemblokiran pesan mencurigakan dan kasus tautan hadiah palsu, peserta didik dapat menentukan tindakan perlindungan diri yang tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Literasi & Etika Digital',
    tujuanPembelajaran:
      'Peserta didik menerapkan etika berkomunikasi yang santun di ruang digital.',
    indikatorSoal:
      'Peserta didik dapat memilih sikap etis (netiket) saat berdiskusi di grup chat kelas atau media sosial.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Literasi & Etika Digital',
    tujuanPembelajaran:
      'Peserta didik memahami etika menghargai hak cipta karya orang lain di internet.',
    indikatorSoal:
      'Disajikan situasi penggunaan gambar atau tulisan dari internet untuk tugas sekolah, peserta didik dapat menentukan tindakan yang menghargai hak cipta.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Literasi & Etika Digital',
    tujuanPembelajaran:
      'Peserta didik mengevaluasi kebenaran informasi sebelum membagikannya di internet (anti-hoaks).',
    indikatorSoal:
      'Disajikan berita sensasional dari sumber tidak resmi, peserta didik dapat menentukan langkah verifikasi fakta yang bijak (HOTS).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Literasi & Etika Digital',
    tujuanPembelajaran:
      'Peserta didik memahami konsep jejak digital dari setiap aktivitas daring.',
    indikatorSoal:
      'Peserta didik dapat mengidentifikasi istilah jejak digital (digital footprint) atas rekam aktivitas di internet (HOTS).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Kecerdasan Artifisial (AI)',
    tujuanPembelajaran:
      'Peserta didik mengenal konsep dasar Kecerdasan Artifisial (AI) melalui contoh teknologi di sekitar.',
    indikatorSoal:
      'Disajikan gambar filter kamera wajah AR dan kartu rekomendasi konten, peserta didik dapat mengidentifikasi teknologi Kecerdasan Artifisial (AI).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Kecerdasan Artifisial (AI)',
    tujuanPembelajaran:
      'Peserta didik mengidentifikasi contoh penggunaan AI dalam kehidupan sehari-hari.',
    indikatorSoal:
      'Peserta didik dapat membedakan perangkat/fitur yang menggunakan AI dengan alat konvensional non-AI.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Kecerdasan Artifisial (AI)',
    tujuanPembelajaran:
      'Peserta didik memahami cara kerja dasar sistem rekomendasi pada aplikasi digital.',
    indikatorSoal:
      'Disajikan gambar sistem rekomendasi dan kebiasaan menonton video sains, peserta didik dapat menjelaskan cara AI menyarankan konten relevan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Kecerdasan Artifisial (AI)',
    tujuanPembelajaran:
      'Peserta didik mengenal pengertian dan fungsi chatbot sebagai aplikasi berbasis AI.',
    indikatorSoal:
      'Peserta didik dapat mengidentifikasi istilah chatbot untuk program AI yang melakukan percakapan tanya-jawab interaktif.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Kecerdasan Artifisial (AI)',
    tujuanPembelajaran:
      'Peserta didik memahami simulasi sederhana melatih model AI menggunakan data contoh berlabel.',
    indikatorSoal:
      'Disajikan gambar siswi mengelompokkan kartu kucing dan anjing ke keranjang berlabel untuk robot AI, peserta didik dapat menentukan tahap pelatihan model (training).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Kecerdasan Artifisial (AI)',
    tujuanPembelajaran:
      'Peserta didik menganalisis pengaruh jumlah dan variasi data latih terhadap keakuratan model AI.',
    indikatorSoal:
      'Disajikan kasus model AI hanya dilatih dengan 1 foto kucing putih lalu diuji dengan kucing hitam, peserta didik dapat menganalisis penyebab kegagalan pengenalan (HOTS).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Kecerdasan Artifisial (AI)',
    tujuanPembelajaran:
      'Peserta didik merancang prinsip keamanan dan kesantunan pada simulasi chatbot ramah anak.',
    indikatorSoal:
      'Disajikan tujuan pembuatan chatbot informasi sekolah, peserta didik dapat menentukan prinsip perancangan chatbot ramah anak yang aman dan etis (HOTS).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Kecerdasan Artifisial (AI)',
    tujuanPembelajaran:
      'Peserta didik menerapkan sikap kritis dan bertanggung jawab dalam memanfaatkan AI untuk belajar.',
    indikatorSoal:
      'Peserta didik dapat memilih sikap bijak saat menggunakan bantuan chatbot AI dalam belajar di rumah (HOTS).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  31: {
    elemen: 'Algoritma & Pemrograman',
    tujuanPembelajaran:
      'Peserta didik mengidentifikasi prinsip urutan langkah (sequence) dan dampak kesalahannya pada simulasi robot.',
    indikatorSoal:
      'Disajikan gambar papan petak robot dan 3 pilihan pernyataan, peserta didik dapat memilih seluruh pernyataan yang benar tentang algoritma.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  32: {
    elemen: 'Berpikir Komputasional',
    tujuanPembelajaran:
      'Peserta didik mengevaluasi penerapan pengenalan pola dan dekomposisi pada ilustrasi visual.',
    indikatorSoal:
      'Disajikan gambar pola geometri serta dekomposisi robot dan 3 pilihan pernyataan, peserta didik dapat memilih pernyataan yang tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  33: {
    elemen: 'Berpikir Komputasional',
    tujuanPembelajaran:
      'Peserta didik membedakan contoh penerapan pola dan dekomposisi dalam kegiatan sehari-hari.',
    indikatorSoal:
      'Disajikan 3 pilihan kegiatan sehari-hari, peserta didik dapat memilih seluruh kegiatan yang menerapkan pola atau dekomposisi.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  34: {
    elemen: 'Literasi & Etika Digital',
    tujuanPembelajaran:
      'Peserta didik menentukan perilaku aman dan beretika saat beraktivitas di dunia maya.',
    indikatorSoal:
      'Disajikan gambar keamanan digital dan 3 pilihan pernyataan, peserta didik dapat memilih seluruh perilaku aman dan beretika.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  35: {
    elemen: 'Kecerdasan Artifisial (AI)',
    tujuanPembelajaran:
      'Peserta didik mengevaluasi cara kerja pelatihan model AI dan prinsip chatbot ramah anak.',
    indikatorSoal:
      'Disajikan gambar simulasi pelatihan model AI dan 3 pilihan pernyataan, peserta didik dapat memilih seluruh pernyataan yang benar (HOTS).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  36: {
    elemen: 'Algoritma & Pemrograman',
    tujuanPembelajaran:
      'Peserta didik menilai kebenaran konsep algoritma, urutan langkah (sequence), dan debugging.',
    indikatorSoal:
      'Disajikan gambar papan petak robot dan 3 pernyataan, peserta didik dapat menentukan nilai Benar atau Salah pada masing-masing pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  37: {
    elemen: 'Berpikir Komputasional',
    tujuanPembelajaran:
      'Peserta didik menilai kebenaran prinsip dekomposisi dan pola berulang dalam berpikir komputasional.',
    indikatorSoal:
      'Disajikan 3 pernyataan mengenai dekomposisi, prediksi pola huruf, dan efisiensi kode, peserta didik dapat menentukan Benar atau Salah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  38: {
    elemen: 'Literasi & Etika Digital',
    tujuanPembelajaran:
      'Peserta didik menilai kebenaran sikap menjaga kata sandi, etika hak cipta, dan pencegahan phishing.',
    indikatorSoal:
      'Disajikan gambar keamanan digital dan 3 pernyataan, peserta didik dapat menentukan Benar atau Salah secara tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  39: {
    elemen: 'Kecerdasan Artifisial (AI)',
    tujuanPembelajaran:
      'Peserta didik mengklasifikasikan contoh AI di sekitar dan membedakannya dengan perangkat non-AI.',
    indikatorSoal:
      'Disajikan gambar filter kamera AR & sistem rekomendasi beserta 3 pernyataan, peserta didik dapat menentukan Benar atau Salah (HOTS).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  40: {
    elemen: 'Kecerdasan Artifisial (AI)',
    tujuanPembelajaran:
      'Peserta didik mengevaluasi prinsip pelatihan data AI, sikap kritis terhadap jawaban AI, dan desain chatbot ramah anak.',
    indikatorSoal:
      'Disajikan gambar simulasi melatih model AI dan 3 pernyataan, peserta didik dapat menentukan Benar atau Salah (HOTS).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu memahami dan menerapkan konsep pada materi ${q.topic}.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus tentang ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (t.includes('ai') || t.includes('kecerdasan') || t.includes('chatbot')) {
    return 'Kecerdasan Artifisial (AI)';
  }
  if (t.includes('keamanan') || t.includes('etika') || t.includes('literasi')) {
    return 'Literasi & Etika Digital';
  }
  if (t.includes('pola') || t.includes('dekomposisi')) {
    return 'Berpikir Komputasional';
  }
  return 'Algoritma & Pemrograman';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  const elemenCountMap: Record<string, number> = {};
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    ...(typeCountMap.pgk_kategori > 0
      ? [
          {
            type: 'pgk_kategori',
            label: 'Benar / Salah (PGK Kategori)',
            count: typeCountMap.pgk_kategori,
            percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
          },
        ]
      : []),
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
