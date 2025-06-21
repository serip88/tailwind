// src/components/Card.ts
export function createCard(title: string, content: string): HTMLDivElement {
  const card = document.createElement('div');
  
  // Tailwind v4 still using v3 classes 
  card.className = `
    bg-white rounded-lg shadow-md p-6 
    hover:shadow-lg transition-shadow
    border border-gray-200
  `;
  
  card.innerHTML = `
    <h3 class="text-xl font-bold mb-2 text-primary">${title}</h3>
    <p class="text-gray-600">${content}</p>
  `;
  
  return card;
}