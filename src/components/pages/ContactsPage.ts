// src/components/pages/ContactsPage.ts
import { ContactsLayout } from '../layouts/ContactsLayout';
import type { Contact } from '../layouts/ContactsLayout';

// Mock data - trong thực tế có thể lấy từ API
const mockContacts: Contact[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    role: 'Software Engineer'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+1 (555) 234-5678',
    role: 'Product Manager'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike.johnson@example.com',
    phone: '+1 (555) 345-6789',
    role: 'UX Designer'
  },
  {
    id: 4,
    name: 'Sarah Williams',
    email: 'sarah.williams@example.com',
    phone: '+1 (555) 456-7890',
    role: 'Marketing Director'
  },
  {
    id: 5,
    name: 'David Brown',
    email: 'david.brown@example.com',
    phone: '+1 (555) 567-8901',
    role: 'Sales Manager'
  },
  {
    id: 6,
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    phone: '+1 (555) 678-9012',
    role: 'HR Specialist'
  }
];

export const ContactsPage = (): string => {
  return ContactsLayout({
    title: 'All Contacts',
    contacts: mockContacts,
    currentRoute: 'contacts'
  });
};