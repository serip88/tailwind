// src/components/layouts/ProductLayout.ts
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  badge?: string;
  inStock: boolean;
}

export interface ProductLayoutProps {
  title: string;
  products: Product[];
  currentRoute?: string;
}

export const ProductLayout = ({ title, products, currentRoute = 'products' }: ProductLayoutProps): string => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(`<svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
        </svg>`);
      } else {
        stars.push(`<svg class="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
        </svg>`);
      }
    }
    return stars.join('');
  };

  const renderProductCard = (product: Product) => {
    const discount = product.originalPrice 
      ? Math.round((1 - product.price / product.originalPrice) * 100) 
      : 0;

    return `
      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
        <!-- Product Image -->
        <div class="relative overflow-hidden h-64 bg-gray-100">
          ${product.badge ? `
            <div class="absolute top-3 left-3 z-10">
              <span class="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                ${product.badge}
              </span>
            </div>
          ` : ''}
          
          <img 
            src="${product.image}" 
            alt="${product.name}"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          >
          
          <!-- Quick Actions -->
          <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
              <button class="bg-white text-gray-800 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </button>
              <button class="bg-white text-gray-800 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Product Info -->
        <div class="p-6">
          <div class="mb-2">
            <span class="text-xs font-medium text-gray-500 uppercase tracking-wider">
              ${product.category}
            </span>
          </div>
          
          <h3 class="text-lg font-semibold text-gray-900 mb-2">
            ${product.name}
          </h3>
          
          <p class="text-gray-600 text-sm mb-4 line-clamp-2">
            ${product.description}
          </p>

          <!-- Rating -->
          <div class="flex items-center gap-2 mb-4">
            <div class="flex">
              ${renderStars(product.rating)}
            </div>
            <span class="text-sm text-gray-500">(${product.reviews})</span>
          </div>

          <!-- Price -->
          <div class="flex items-center justify-between mb-4">
            <div>
              <span class="text-2xl font-bold text-gray-900">$${product.price.toFixed(2)}</span>
              ${product.originalPrice ? `
                <span class="text-sm text-gray-500 line-through ml-2">$${product.originalPrice.toFixed(2)}</span>
                <span class="text-sm text-red-500 ml-2">-${discount}%</span>
              ` : ''}
            </div>
            <span class="${product.inStock ? 'text-green-600' : 'text-red-600'} text-sm font-medium">
              ${product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>

          <!-- Add to Cart Button -->
          <button class="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors ${!product.inStock ? 'opacity-50 cursor-not-allowed' : ''}" ${!product.inStock ? 'disabled' : ''}>
            ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    `;
  };

  return `
    <div class="min-h-screen bg-gray-50">
      <!-- Header -->
      <header class="bg-white shadow-sm border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-8 py-4">
          <div class="flex items-center justify-between">
            <h1 class="text-2xl font-bold text-primary">
              <a href="#/" class="hover:text-blue-600 transition-colors">My App</a>
            </h1>
            <nav class="flex gap-6">
              <a href="#/" class="${currentRoute === 'home' ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'} transition-colors">
                Home
              </a>
              <a href="#/products" class="${currentRoute === 'products' ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'} transition-colors">
                Products
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

      <!-- Page Header -->
      <div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div class="max-w-7xl mx-auto px-8">
          <h1 class="text-4xl font-bold mb-4">${title}</h1>
          <p class="text-xl opacity-90">Discover our amazing collection of products</p>
        </div>
      </div>

      <!-- Filters and Sort -->
      <div class="max-w-7xl mx-auto px-8 py-8">
        <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <div class="flex items-center gap-4">
              <select class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>All Categories</option>
                <option>Electronics</option>
                <option>Fashion</option>
                <option>Home & Garden</option>
              </select>
              
              <select class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Customer Rating</option>
                <option>Newest First</option>
              </select>
            </div>
            
            <div class="flex items-center gap-2">
              <span class="text-gray-600">View:</span>
              <button class="p-2 rounded-lg bg-gray-100 text-gray-800">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
              </button>
              <button class="p-2 rounded-lg text-gray-600">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Products Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${products.map(product => renderProductCard(product)).join('')}
        </div>

        <!-- Pagination -->
        <div class="flex justify-center mt-12">
          <nav class="flex gap-2">
            <button class="px-4 py-2 text-gray-500 hover:text-gray-700 transition-colors">
              Previous
            </button>
            <button class="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
            <button class="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">2</button>
            <button class="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">3</button>
            <button class="px-4 py-2 text-gray-500 hover:text-gray-700 transition-colors">
              Next
            </button>
          </nav>
        </div>
      </div>

      <!-- Footer -->
      <footer class="bg-white border-t border-gray-200 mt-16">
        <div class="max-w-7xl mx-auto px-8 py-8">
          <p class="text-center text-gray-500 text-sm">
            © 2025 My App. Built with Tailwind CSS v4 + TypeScript
          </p>
        </div>
      </footer>
    </div>
  `;
};