// src/components/pages/ContactsList.ts
import { BaseLayout } from '../layouts/BaseLayout';

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  department: string;
  avatar?: string;
  status: 'active' | 'away' | 'offline';
}

// Sample contacts data
const contacts: Contact[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    phone: '+1 (555) 123-4567',
    role: 'Product Manager',
    department: 'Product',
    status: 'active'
  },
  {
    id: 2,
    name: 'Michael Chen',
    email: 'michael.chen@example.com',
    phone: '+1 (555) 234-5678',
    role: 'Senior Developer',
    department: 'Engineering',
    status: 'active'
  },
  {
    id: 3,
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    phone: '+1 (555) 345-6789',
    role: 'UX Designer',
    department: 'Design',
    status: 'away'
  },
  {
    id: 4,
    name: 'James Wilson',
    email: 'james.wilson@example.com',
    phone: '+1 (555) 456-7890',
    role: 'Marketing Director',
    department: 'Marketing',
    status: 'offline'
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    email: 'lisa.thompson@example.com',
    phone: '+1 (555) 567-8901',
    role: 'HR Manager',
    department: 'Human Resources',
    status: 'active'
  },
  {
    id: 6,
    name: 'Robert Martinez',
    email: 'robert.martinez@example.com',
    phone: '+1 (555) 678-9012',
    role: 'Sales Executive',
    department: 'Sales',
    status: 'away'
  }
];

const getStatusColor = (status: Contact['status']): string => {
  switch (status) {
    case 'active':
      return 'bg-green-500';
    case 'away':
      return 'bg-yellow-500';
    case 'offline':
      return 'bg-gray-400';
    default:
      return 'bg-gray-400';
  }
};

const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();
};

export const ContactsList = (): string => {
  const content = `
    <div class="max-w-6xl mx-auto p-8">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-2">Contacts</h1>
        <p class="text-gray-600">Manage and connect with your team members</p>
      </div>

      <!-- Search and Filters -->
      <div class="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div class="flex flex-col lg:flex-row gap-4">
          <div class="flex-1">
            <div class="relative">
              <input 
                type="text" 
                placeholder="Search contacts by name, email, or department..."
                class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
              <svg class="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
          
          <div class="flex gap-3">
            <select class="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">All Departments</option>
              <option value="product">Product</option>
              <option value="engineering">Engineering</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
              <option value="sales">Sales</option>
              <option value="hr">Human Resources</option>
            </select>
            
            <button class="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              Add Contact
            </button>
          </div>
        </div>
      </div>

      <!-- Contacts Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${contacts.map(contact => `
          <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
            <div class="p-6">
              <!-- Contact Header -->
              <div class="flex items-start justify-between mb-4">
                <div class="flex items-center gap-4">
                  <div class="relative">
                    <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
                      ${getInitials(contact.name)}
                    </div>
                    <div class="absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor(contact.status)} rounded-full border-2 border-white"></div>
                  </div>
                  
                  <div>
                    <h3 class="font-semibold text-gray-900">${contact.name}</h3>
                    <p class="text-sm text-gray-500">${contact.role}</p>
                  </div>
                </div>
                
                <button class="text-gray-400 hover:text-gray-600 transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                  </svg>
                </button>
              </div>
              
              <!-- Contact Details -->
              <div class="space-y-3">
                <div class="flex items-center gap-3 text-sm">
                  <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <a href="mailto:${contact.email}" class="text-gray-600 hover:text-blue-600 transition-colors truncate">
                    ${contact.email}
                  </a>
                </div>
                
                <div class="flex items-center gap-3 text-sm">
                  <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <a href="tel:${contact.phone}" class="text-gray-600 hover:text-blue-600 transition-colors">
                    ${contact.phone}
                  </a>
                </div>
                
                <div class="flex items-center gap-3 text-sm">
                  <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                  <span class="text-gray-600">${contact.department}</span>
                </div>
              </div>
              
              <!-- Actions -->
              <div class="flex gap-2 mt-4 pt-4 border-t border-gray-100">
                <button class="flex-1 bg-blue-50 text-blue-600 px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
                  View Profile
                </button>
                <button class="flex-1 bg-gray-50 text-gray-600 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                  Message
                </button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Empty State (hidden when contacts exist) -->
      ${contacts.length === 0 ? `
        <div class="bg-white rounded-xl shadow-lg p-12 text-center">
          <svg class="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">No contacts found</h3>
          <p class="text-gray-600 mb-6">Start by adding your first contact to the list.</p>
          <button class="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            Add Your First Contact
          </button>
        </div>
      ` : ''}
    </div>
  `;

  return BaseLayout({
    title: 'Contacts List',
    content,
    currentRoute: 'contacts'
  });
};