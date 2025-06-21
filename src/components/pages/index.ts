// src/components/pages/index.ts
import { HomeLayout } from '../layouts/HomeLayout';
import { BaseLayout } from '../layouts/BaseLayout';
import { ContactLayout } from '../layouts/ContactLayout';

// Home Page
export const HomePage = (): string => {
  const content = `
    <div class="text-center">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">
        Build Amazing Things
      </h2>
      <p class="text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
        This is your starting point for creating beautiful, responsive web applications. 
        Our modern stack combines the power of TypeScript with the flexibility of Tailwind CSS.
      </p>
      
      <div class="grid md:grid-cols-2 gap-6 text-left">
        <div class="bg-blue-50 rounded-lg p-6">
          <h3 class="font-semibold text-blue-900 mb-2">Getting Started</h3>
          <p class="text-blue-700 text-sm">
            Explore our clean, modular architecture designed for scalability and maintainability.
          </p>
        </div>
        
        <div class="bg-green-50 rounded-lg p-6">
          <h3 class="font-semibold text-green-900 mb-2">Modern Development</h3>
          <p class="text-green-700 text-sm">
            Built-in TypeScript support with hot reloading and modern build tools.
          </p>
        </div>
      </div>
    </div>
  `;

  return HomeLayout({
    title: 'Home Page',
    content
  });
};

// About Page
export const AboutPage = (): string => {
  const content = `
    <div class="max-w-4xl mx-auto p-8">
      <h1 class="text-4xl font-bold text-primary mb-8">About Us</h1>
      
      <div class="prose prose-lg max-w-none">
        <p class="text-gray-600 text-lg leading-relaxed mb-6">
          We are passionate about creating modern, efficient, and beautiful web applications. 
          Our team combines cutting-edge technology with thoughtful design to deliver 
          exceptional user experiences.
        </p>
        
        <div class="grid md:grid-cols-2 gap-8 my-8">
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
            <p class="text-gray-600">
              To empower developers and businesses with modern, scalable solutions 
              that drive innovation and growth.
            </p>
          </div>
          
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Our Vision</h3>
            <p class="text-gray-600">
              A world where technology seamlessly integrates with human needs, 
              creating meaningful and delightful experiences.
            </p>
          </div>
        </div>
        
        <h3 class="text-2xl font-semibold text-gray-900 mb-4">What We Do</h3>
        <ul class="space-y-3 text-gray-600">
          <li class="flex items-start gap-3">
            <span class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
            <span>Full-stack web application development</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
            <span>Modern UI/UX design and implementation</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
            <span>Performance optimization and scalability solutions</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
            <span>Technical consulting and architecture planning</span>
          </li>
        </ul>
      </div>
    </div>
  `;

  return BaseLayout({
    title: 'About Us',
    content,
    currentRoute: 'about'
  });
};

// Contact Page
export const ContactPage = (): string => {
  const content = `
    <div>
      <h2 class="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
      
      <form class="space-y-6">
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              First Name *
            </label>
            <input 
              type="text" 
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="John"
              required
            >
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Last Name *
            </label>
            <input 
              type="text" 
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Doe"
              required
            >
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input 
            type="email" 
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            placeholder="john.doe@example.com"
            required
          >
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Subject *
          </label>
          <select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
            <option value="">Choose a subject...</option>
            <option value="general">General Inquiry</option>
            <option value="support">Technical Support</option>
            <option value="business">Business Partnership</option>
            <option value="feedback">Feedback</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea 
            rows="6"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
            placeholder="Tell us about your project or inquiry..."
            required
          ></textarea>
        </div>

        <div class="flex items-center gap-3">
          <input 
            type="checkbox" 
            id="privacy"
            class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          >
          <label for="privacy" class="text-sm text-gray-600">
            I agree to the <a href="#" class="text-blue-600 underline">Privacy Policy</a> and <a href="#" class="text-blue-600 underline">Terms of Service</a>
          </label>
        </div>

        <div class="flex gap-4">
          <button 
            type="submit"
            class="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Send Message
          </button>
          
          <button 
            type="reset"
            class="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Clear Form
          </button>
        </div>
      </form>

      <div class="mt-8 pt-8 border-t border-gray-200">
        <p class="text-sm text-gray-500 text-center">
          We typically respond within 24 hours. For urgent matters, please call us directly.
        </p>
      </div>
    </div>
  `;

  return ContactLayout({
    title: 'Contact Us',
    content
  });
};