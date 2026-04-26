"use client";

export default function EnquiryForm() {
  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Your Name"
        className="w-full bg-blue-800 border border-blue-700 rounded-lg px-4 py-3 text-white placeholder-blue-400 focus:outline-none focus:border-blue-400 text-sm"
      />
      <input
        type="tel"
        placeholder="Phone Number"
        className="w-full bg-blue-800 border border-blue-700 rounded-lg px-4 py-3 text-white placeholder-blue-400 focus:outline-none focus:border-blue-400 text-sm"
      />
      <input
        type="email"
        placeholder="Email Address"
        className="w-full bg-blue-800 border border-blue-700 rounded-lg px-4 py-3 text-white placeholder-blue-400 focus:outline-none focus:border-blue-400 text-sm"
      />
      <textarea
        rows={3}
        placeholder="Message (optional)"
        className="w-full bg-blue-800 border border-blue-700 rounded-lg px-4 py-3 text-white placeholder-blue-400 focus:outline-none focus:border-blue-400 text-sm resize-none"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-400 text-white py-3 rounded-xl font-bold transition-colors"
      >
        Send Enquiry
      </button>
    </form>
  );
}
