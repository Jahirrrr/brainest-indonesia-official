import React, { useEffect, useRef } from "react";
import { Trophy, User, Star, BarChart2, CheckCircle2, AlertTriangle, Smile } from "lucide-react";

// Mock data leaderboard
const leaderboard = [
  { name: "Sulaiman", score: 855, rank: "Challenger", trophy: true, university: "Universitas Indonesia", major: "Ilmu Komputer", avatar: "/avatars/WhatsApp Image 2025-05-10 at 07.15.42.jpeg" },
  { name: "Siti", score: 770, rank: "Challenger", trophy: true, university: "Universitas Gadjah Mada", major: "Kedokteran", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Rizky", score: 765, rank: "Challenger", trophy: false, university: "Institut Teknologi Bandung", major: "Teknik Sipil", avatar: "https://randomuser.me/api/portraits/men/45.jpg" },
  { name: "Edwin", score: 760, rank: "Master", trophy: false, university: "Universitas Brawijaya", major: "Teknik Elektro", avatar: "https://randomuser.me/api/portraits/men/22.jpg" },
  { name: "FlyWithMe", score: 755, rank: "Master", trophy: false, university: "Universitas Diponegoro", major: "Teknik Kimia", avatar: "https://randomuser.me/api/portraits/women/33.jpg" },
  { name: "BigBoi007", score: 750, rank: "Grandmaster", trophy: false, university: "Institut Pertanian Bogor", major: "Agroteknologi", avatar: "https://randomuser.me/api/portraits/men/67.jpg" },
  { name: "Pudge", score: 740, rank: "Gold", trophy: false, university: "Universitas Padjadjaran", major: "Kedokteran Gigi", avatar: "https://randomuser.me/api/portraits/men/89.jpg" },
  { name: "n0nameplayer", score: 730, rank: "Gold", trophy: false, university: "Universitas Hasanuddin", major: "Teknik Mesin", avatar: "https://randomuser.me/api/portraits/women/55.jpg" },
  { name: "Kimberly", score: 720, rank: "Silver", trophy: false, university: "Universitas Sebelas Maret", major: "Psikologi", avatar: "https://randomuser.me/api/portraits/women/68.jpg" },
  { name: "Kamu", score: 650, rank: "Bronze", trophy: false, isUser: true, position: 80, university: "Universitas Airlangga", major: "Manajemen", avatar: "https://randomuser.me/api/portraits/men/99.jpg" },
];

// Warna badge rank yang lebih soft dan readable
const rankColors = {
  Challenger: "bg-yellow-300 text-yellow-900 border-yellow-400 dark:bg-yellow-400 dark:text-yellow-900 dark:border-yellow-300",
  Grandmaster: "bg-pink-200 text-pink-800 border-pink-300 dark:bg-pink-400 dark:text-pink-900 dark:border-pink-300",
  Master: "bg-purple-200 text-purple-800 border-purple-300 dark:bg-purple-400 dark:text-purple-900 dark:border-purple-300",
  Gold: "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-200 dark:text-yellow-900 dark:border-yellow-300",
  Silver: "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-200 dark:text-blue-900 dark:border-blue-300",
  Bronze: "bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-200 dark:text-orange-900 dark:border-orange-300",
};

export default function LeaderboardXP() {
  // Top 3
  const top3 = leaderboard.slice(0, 3);
  // Sisa leaderboard (tanpa top 3)
  const rest = leaderboard.slice(3).filter((u) => !u.isUser);
  // User sendiri
  const user = leaderboard.find((u) => u.isUser);

  return (
    <div className="w-full flex flex-col items-center px-2 md:px-0 py-8">
      <h1 className="text-4xl font-extrabold mb-2 text-center drop-shadow">Leaderboard</h1>
      <div className="text-blue-400 dark:text-blue-200 text-lg text-center mb-4 font-bold tracking-wide uppercase flex items-center justify-center gap-2">
        PERINGKAT 10 BESAR SISWA TERBAIK DI TRYOUT TERBARU!
        <Trophy className="w-6 h-6 text-yellow-400" />
      </div>
      {/* Top 3 Card Horizontal */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl mb-8 justify-center items-stretch">
        {top3.map((user, i) => (
          <div
            key={user.name}
            className={`flex-1 rounded-2xl shadow-xl border-2 bg-blue-900/80 border-blue-400 flex flex-col items-center justify-center py-8 px-4 md:px-8 min-w-[220px] max-w-xs mx-auto transition-all`}
          >
            {user.avatar ? (
              <img src={user.avatar} alt={user.name} className="w-16 h-16 mb-3 rounded-full object-cover border-4 border-cyan-400 bg-white shadow" />
            ) : (
              <User className="w-12 h-12 mb-3 text-cyan-400" />
            )}
            <div className="font-extrabold text-3xl mb-1 text-center text-white">{user.name}</div>
            <div className="text-lg text-blue-100 mb-1 text-center font-semibold whitespace-nowrap overflow-hidden text-ellipsis w-full">
              {user.university || 'Belum diatur'}
            </div>
            <div className="text-base text-cyan-200 mb-3 text-center font-medium whitespace-nowrap overflow-hidden text-ellipsis w-full">
              {user.major || 'Belum diatur'}
            </div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-4 py-2 rounded-full text-base font-bold bg-yellow-400 text-yellow-900 flex items-center gap-2 shadow border border-yellow-300">{user.rank} <Trophy className="w-5 h-5 text-yellow-700" /></span>
            </div>
            <div className="text-2xl font-extrabold text-white">Skor: {user.score}</div>
          </div>
        ))}
      </div>
      {/* Tabel Leaderboard */}
      <div className="relative z-10 max-w-4xl w-full rounded-3xl shadow-2xl border-2 bg-white/90 dark:bg-blue-950/80 border-blue-200 dark:border-blue-900 backdrop-blur-md px-2 md:px-12 py-6 md:py-10 flex flex-col items-center animate-cardpop">
        <table className="min-w-full text-base md:text-lg">
          <thead>
            <tr className="bg-blue-100 dark:bg-blue-900/80">
              <th className="px-6 py-3 text-center text-blue-900 dark:text-blue-100">Posisi</th>
              <th className="px-6 py-3 text-center text-blue-900 dark:text-blue-100">Nama</th>
              <th className="px-6 py-3 text-center text-blue-900 dark:text-blue-100">Skor</th>
              <th className="px-6 py-3 text-center text-blue-900 dark:text-blue-100">Universitas Tujuan</th>
              <th className="px-6 py-3 text-center text-blue-900 dark:text-blue-100">Jurusan Tujuan</th>
            </tr>
          </thead>
          <tbody>
            {rest.map((row, i) => (
              <tr
                key={row.name}
                className="hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-all"
              >
                <td className="px-6 py-3 text-center font-bold text-blue-900 dark:text-blue-100">{i + 4}</td>
                <td className="px-6 py-3 text-center flex items-center justify-center gap-2 text-blue-900 dark:text-blue-100">
                  {row.avatar ? (
                    <img src={row.avatar} alt={row.name} className="w-8 h-8 rounded-full object-cover border-2 border-cyan-400 bg-white" />
                  ) : (
                    <User className="w-5 h-5 text-cyan-400" />
                  )}
                  <span className="font-bold">{row.name}</span>
                </td>
                <td className="px-6 py-3 text-center font-mono font-bold text-blue-900 dark:text-blue-100">{row.score}</td>
                <td className="px-6 py-3 text-center font-bold text-blue-900 dark:text-blue-100 whitespace-nowrap max-w-xs overflow-hidden text-ellipsis">{row.university || 'Belum diatur'}</td>
                <td className="px-6 py-3 text-center font-bold text-blue-900 dark:text-blue-100 whitespace-nowrap max-w-xs overflow-hidden text-ellipsis">{row.major || 'Belum diatur'}</td>
              </tr>
            ))}
            {/* Baris user sendiri */}
            {user && (
              <tr className="bg-cyan-100 dark:bg-cyan-900/80 font-bold text-cyan-900 dark:text-cyan-200 border-2 border-cyan-400 shadow-lg animate-glow">
                <td className="px-6 py-3 text-center text-lg">{user.position}</td>
                <td className="px-6 py-3 text-center flex items-center justify-center gap-2">
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full object-cover border-2 border-cyan-400 bg-white" />
                  ) : (
                    <User className="w-5 h-5 text-cyan-400" />
                  )}
                  <span className="font-bold">{user.name}</span>
                  <span className="ml-2 bg-cyan-500 text-white text-xs px-2 py-1 rounded-full font-semibold">Kamu</span>
                </td>
                <td className="px-6 py-3 text-center font-mono font-bold">{user.score}</td>
                <td className="px-6 py-3 text-center font-bold text-blue-900 dark:text-blue-100 whitespace-nowrap max-w-xs overflow-hidden text-ellipsis">{user.university || 'Belum diatur'}</td>
                <td className="px-6 py-3 text-center font-bold text-blue-900 dark:text-blue-100 whitespace-nowrap max-w-xs overflow-hidden text-ellipsis">{user.major || 'Belum diatur'}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="mt-8 text-blue-700 dark:text-blue-200 text-lg text-center">
        Leaderboard akan di-reset setiap ada paket tryout baru. Siswa yang masuk leaderboard sebelum reset akan mendapatkan trophy di profil.
      </div>
      <style>{`
        .animate-glow { animation: glow 1.5s infinite alternate; }
        @keyframes glow {
          from { box-shadow: 0 0 0px #22d3ee; }
          to { box-shadow: 0 0 16px #22d3ee; }
        }
        .animate-cardpop {
          animation: cardPop 0.7s cubic-bezier(.23,1.01,.32,1) 0.1s both;
        }
        @keyframes cardPop {
          0% { transform: scale(0.95); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
} 