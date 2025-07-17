export default function Foot() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="mb-8 md:mb-0">
          <img
            src="logo2.png"
            alt="Logo"
            className="h-11 mb-6"
          />
          <div className="flex space-x-4 mt-4">
  <a href="https://www.instagram.com/vishnoosingh2659/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl">
    <i className="fab fa-instagram  "></i>
  </a>
  <a href="https://www.linkedin.com/in/vishnoo-singh-81a1a7325/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl">
    <i className="fab fa-linkedin mr-2 pr-2"></i>
  </a>
  <a href="https://github.com/Vishnoo-Singh108" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl">
    <i className="fab fa-github"></i>
  </a>
</div>
          

          <p className="max-w-xs text-sm">
            Empowering First Year MMMUT students with comprehensive educational resources, study material and sources.
          </p> 

            <p className="max-w-xs text-sm">
            These resources are suggested for guidance only. Feel free to explore and use alternatives that best suit your learning style.
          </p>
          
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
        

        

        

          <div>
            <h3 className="text-sm font-semibold text-white">Sources</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="/academic" className="hover:text-white">Academic</a></li>
              <li><a href="/skill" className="hover:text-white">Technical Skill</a></li>
              <li><a href="/practice" className="hover:text-white">Practice</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-500">
        © 2025 Your Company, Inc. All rights reserved.
      </div>
    </footer>
  );
}
