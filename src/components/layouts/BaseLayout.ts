// src/components/layouts/BaseLayout.ts
export interface LayoutProps {
  title: string;
  content: string;
  currentRoute?: string;
}

export const BaseLayout = ({ title, content, currentRoute = 'home' }: LayoutProps): string => {
  return `
    <div class="min-h-screen bg-gray-50">
      <header class="bg-white shadow-sm border-b border-gray-200">
        <div class="max-w-6xl mx-auto px-8 py-4">
          <div class="flex items-center justify-between">
            <h1 class="text-2xl font-bold text-primary">
              <a href="#/" class="hover:text-blue-600 transition-colors">My App</a>
            </h1>
            <nav class="flex gap-6">
              <a href="#/" class="${currentRoute === 'home' ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'} transition-colors">
                Home
              </a>
              <a href="#/about" class="${currentRoute === 'about' ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'} transition-colors">
                About
              </a>
              <a href="#/contact" class="${currentRoute === 'contact' ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'} transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>
      
      <main class="flex-1">
        ${content}
      </main>
      
      <footer class="bg-white border-t border-gray-200 mt-auto">
        <div class="max-w-6xl mx-auto px-8 py-6">
          <p class="text-center text-gray-500 text-sm">
            © 2025 My App. Built with Tailwind CSS v4 + TypeScript.1
          </p>
        </div>
      </footer>
    </div>
  `;
};