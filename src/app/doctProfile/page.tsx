"use client";
import { doctors } from "@/lib/DoctData";
import { useRouter } from 'next/navigation';
export default function DoctProfilePage() {
  const router = useRouter();
   const handleBookAppointment = (doctorName: string) => {
    router.push(`/appointment?doctor=${doctorName}`);
  };
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-slate-100 dark:from-gray-950 dark:to-gray-900 text-slate-800 dark:text-slate-100 transition-colors duration-500 relative">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl dark:bg-pink-600/20 animate-pulse" />
        <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-700/20 animate-pulse [animation-delay:3s]" />
      </div>

      <main className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 py-10 flex flex-col gap-10">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent text-align-center">Doctors Profile</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <div key={doctor.name} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-semibold mb-2 text-blue-600 dark:text-blue-400">Dr. {doctor.name}</h2>
              <p className="text-gray-700 dark:text-gray-300"><span className="font-medium">Specialization:</span> {doctor.specialization}</p>
              <p className="text-gray-700 dark:text-gray-300"><span className="font-medium">Experience:</span> {doctor.year_of_experience} Years</p>
              <p className="text-gray-700 dark:text-gray-300"><span className="font-medium">Degree:</span> {doctor.degree}</p>
              <p className="text-gray-700 dark:text-gray-300"><span className="font-medium">Distance:</span> {doctor.how_far_they_are} km away</p>
              <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"  onClick={(e) => {
                 e.stopPropagation(); // Prevent card's onClick from firing
                  handleBookAppointment(doctor.name);
                
              }}>book an appointment</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}