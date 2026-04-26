import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-blue-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-400 rounded-md flex items-center justify-center font-bold text-blue-900 text-sm">
                RH
              </div>
              <span className="text-xl font-bold text-white">
                Risaa <span className="text-blue-300">Homes</span>
              </span>
            </div>
            <p className="text-blue-300 text-sm leading-relaxed max-w-xs">
              Premium real estate services. Find your dream home with Risaa Homes — trusted by thousands of families.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/properties", label: "Properties" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-blue-300">
              <li>📍 123 Blue Avenue, Mumbai 400001</li>
              <li>📞 +91 98765 43210</li>
              <li>✉️ hello@risaahomes.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-6 text-center text-sm text-blue-400">
          © {new Date().getFullYear()} Risaa Homes. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
