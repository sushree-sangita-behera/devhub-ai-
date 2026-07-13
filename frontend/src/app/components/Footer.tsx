import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="bg-primary text-white px-2 py-1 rounded">Dev</span>
              <span>Hub</span>
            </h3>
            <p className="text-gray-400 text-sm">
              AI-Powered Full-Stack Development Platform for modern developers.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Portfolio Builder</li>
              <li>Project Management</li>
              <li>Coding Practice</li>
              <li>Learning Tracker</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Documentation</li>
              <li>API Reference</li>
              <li>GitHub</li>
              <li>Community</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Discord</li>
              <li>Email</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} AI Developer Hub. All rights reserved.</p>
          <p className="mt-1">Built with ❤️ for developers</p>
        </div>
      </div>
    </footer>
  )
}