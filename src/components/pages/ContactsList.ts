// src/components/pages/ContactsList.ts
import { BaseLayout } from '../layouts/BaseLayout';

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  avatar: string;
  status: 'active' | 'inactive';
}

// Mock data for contacts
const mockContacts: Contact[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 123-4567",
    company: "Tech Innovators Inc.",
    role: "Product Manager",
    avatar: "SJ",
    status: "active"
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael.chen@example.com",
    phone: "+1 (555) 234-5678",
    company: "Digital Solutions Ltd.",
    role: "Senior Developer",
    avatar: "MC",
    status: "active"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    email: "emily.rodriguez@example.com",
    phone: "+1 (555) 345-6789",
    company: "Creative Agency",
    role: "UX Designer",
    avatar: "ER",
    status: "inactive"
  },
  {
    id: 4,
    name: "David Kim",
    email: "david.kim@example.com",
    phone: "+1 (555) 456-7890",
    company: "StartUp Ventures",
    role: "CEO",
    avatar: "DK",
    status: "active"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    email: "lisa.thompson@example.com",
    phone: "+1 (555) 567-8901",
    company: "Marketing Pro",
    role: "Marketing Director",
    avatar: "LT",
    status: "active"
  },
  {
    id: 6,
    name: "James Wilson",
    email: "james.wilson@example.com",
    phone: "+1 (555) 678-9012",
    company: "Finance Corp",
    role: "CFO",
    avatar: "JW",
    status: "inactive"
  }
];

const createContactCard = (contact: Contact): string => {
  const statusColor = contact.status === 'active' ? 'green' : 'gray';
  const avatarColors = [
    'bg-blue-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-teal-500',
    'bg-orange-500'
  ];
  const avatarColor = avatarColors[contact.id % avatarColors.length];

  return `
    <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div class="p-6">
        <div class="flex items-start justify-between mb-4">
          <div class="flex items-center gap-4">
            <!-- Avatar -->
            <div class="${avatarColor} w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-lg">
              ${contact.avatar}
            </div>
            
            <!-- Contact Info -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                ${contact.name}
              </h3>
              <p class="text-sm text-gray-500">${contact.role}</p>
            </div>
          </div>
          
          <!-- Status Badge -->
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${statusColor}-100 text-${statusColor}-800">
            ${contact.status === 'active' ? '● Active' : '○ Inactive'}
          </span>
        </div>
        
        <!-- Contact Details -->
        <div class="space-y-2 text-sm">
          <div class="flex items-center gap-2 text-gray-600">
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <a href="mailto:${contact.email}" class="hover:text-blue-600 transition-colors">
              ${contact.email}
            </a>
          </div>
          
          <div class="flex items-center gap-2 text-gray-600">
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            <a href="tel:${contact.phone}" class="hover:text-blue-600 transition-colors">
              ${contact.phone}
            </a>
          </div>
          
          <div class="flex items-center gap-2 text-gray-600">
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            </svg>
            <span>${contact.company}</span>
          </div>
        </div>
        
        <!-- Actions -->
        <div class="flex gap-2 mt-4 pt-4 border-t border-gray-100">
          <button class="flex-1 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors">
            View Profile
          </button>
          <button class="flex-1 text-sm font-medium text-gray-600 hover:text-gray-700 hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors">
            Edit
          </button>
        </div>
      </div>
    </div>
  `;
};

export const ContactsList = (): string => {
  const contactCards = mockContacts.map(contact => createContactCard(contact)).join('');
  
  const content = `
    <div class="max-w-7xl mx-auto px-8 py-8">
      <!-- Header Section -->
      <div class="mb-8">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h1 class="text-3xl font-bold text-gray-900">Contacts Directory</h1>
            <p class="text-gray-600 mt-2">Manage and organize your professional network</p>
          </div>
          
          <!-- Add Contact Button -->
          <button class="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            Add Contact
          </button>
        </div>
        
        <!-- Search and Filter Bar -->
        <div class="bg-white rounded-xl shadow-md p-4">
          <div class="flex flex-col lg:flex-row gap-4">
            <!-- Search Input -->
            <div class="flex-1 relative">
              <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <input 
                type="text" 
                placeholder="Search contacts by name, email, or company..."
                class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              >
            </div>
            
            <!-- Filter Buttons -->
            <div class="flex gap-2">
              <select class="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
                <option value="">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              
              <select class="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
                <option value="">Sort By</option>
                <option value="name">Name</option>
                <option value="company">Company</option>
                <option value="recent">Recently Added</option>
              </select>
              
              <button class="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
                </svg>
                <span class="text-gray-600">Filter</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div class="bg-white rounded-lg shadow-md p-4">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-500">Total Contacts</p>
              <p class="text-2xl font-bold text-gray-900">${mockContacts.length}</p>
            </div>
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
          </div>
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-4">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-500">Active</p>
              <p class="text-2xl font-bold text-green-600">${mockContacts.filter(c => c.status === 'active').length}</p>
            </div>
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
          </div>
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-4">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-500">Inactive</p>
              <p class="text-2xl font-bold text-gray-600">${mockContacts.filter(c => c.status === 'inactive').length}</p>
            </div>
            <div class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
          </div>
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-4">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-500">Companies</p>
              <p class="text-2xl font-bold text-purple-600">${new Set(mockContacts.map(c => c.company)).size}</p>
            </div>
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Contacts Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${contactCards}
      </div>
      
      <!-- Pagination -->
      <div class="mt-8 flex items-center justify-between">
        <p class="text-sm text-gray-600">
          Showing 1 to ${mockContacts.length} of ${mockContacts.length} contacts
        </p>
        
        <div class="flex gap-2">
          <button class="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors disabled:opacity-50" disabled>
            Previous
          </button>
          <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            1
          </button>
          <button class="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
            2
          </button>
          <button class="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
            3
          </button>
          <button class="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  `;

  return BaseLayout({
    title: 'Contacts List',
    content,
    currentRoute: 'contacts'
  });
};