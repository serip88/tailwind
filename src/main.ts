// src/main.ts
import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <div class="min-h-screen bg-gray-50 p-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-primary mb-8">
        Tailwind CSS v4 + TypeScript
      </h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-xl font-semibold mb-4">Feature 1</h2>
          <p class="text-gray-600">
            Zero-configuration approach
          </p>
        </div>
        
        <div class="bg-white rounded-lg shadow p-6 hover:hover-scale">
          <h2 class="text-xl font-semibold mb-4">Feature 2</h2>
          <p class="text-gray-600">
            CSS-first configuration
          </p>
        </div>
      </div>
    </div>
  </div>
`