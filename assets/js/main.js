/**
 * Main JavaScript file for HexaDash
 * Handles app initialization and component loading
 */

class HexaDashApp {
    constructor() {
        this.currentPage = 'contacts';
        this.components = {};
        this.init();
    }

    /**
     * Initialize the application
     */
    async init() {
        try {
            await this.loadComponents();
            this.setupEventListeners();
            this.loadPage(this.currentPage);
            console.log('HexaDash App initialized successfully');
        } catch (error) {
            console.error('Failed to initialize app:', error);
        }
    }

    /**
     * Load HTML components
     */
    async loadComponents() {
        const components = [
            { name: 'header', container: 'header-container' },
            { name: 'sidebar', container: 'sidebar-container' }
        ];

        for (const component of components) {
            try {
                const response = await fetch(`components/${component.name}.html`);
                if (response.ok) {
                    const html = await response.text();
                    document.getElementById(component.container).innerHTML = html;
                    this.components[component.name] = html;
                } else {
                    console.warn(`Failed to load ${component.name} component`);
                }
            } catch (error) {
                console.error(`Error loading ${component.name}:`, error);
            }
        }
    }

    /**
     * Load a specific page
     */
    async loadPage(pageName) {
        try {
            const response = await fetch(`pages/${pageName}.html`);
            if (response.ok) {
                const html = await response.text();
                document.getElementById('main-content').innerHTML = html;
                this.currentPage = pageName;
                
                // Trigger page-specific initialization
                this.initializePage(pageName);
            } else {
                console.warn(`Failed to load ${pageName} page`);
            }
        } catch (error) {
            console.error(`Error loading page ${pageName}:`, error);
        }
    }

    /**
     * Initialize page-specific functionality
     */
    initializePage(pageName) {
        switch (pageName) {
            case 'contacts':
                if (window.TableManager) {
                    window.TableManager.init();
                }
                if (window.SearchManager) {
                    window.SearchManager.init();
                }
                break;
            case 'dashboard':
                // Dashboard specific initialization
                break;
            default:
                console.log(`No specific initialization for ${pageName}`);
        }
    }

    /**
     * Setup global event listeners
     */
    setupEventListeners() {
        // Navigation events
        document.addEventListener('click', (e) => {
            const pageElement = e.target.closest('[data-page]');
            if (pageElement) {
                const pageName = pageElement.getAttribute('data-page');
                this.loadPage(pageName);
            }
        });

        // Header button events
        document.addEventListener('click', (e) => {
            if (e.target.closest('#menu-toggle')) {
                this.toggleSidebar();
            } else if (e.target.closest('#user-profile')) {
                this.toggleUserMenu();
            }
        });
    }

    /**
     * Toggle sidebar visibility (for mobile)
     */
    toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        if (sidebar) {
            sidebar.classList.toggle('hidden');
            sidebar.classList.toggle('lg:block');
        }
    }

    /**
     * Toggle user profile menu
     */
    toggleUserMenu() {
        // Implementation for user profile dropdown
        console.log('User menu toggled');
    }

    /**
     * Show notification
     */
    showNotification(message, type = 'info') {
        // Create and show notification
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
            type === 'success' ? 'bg-green-500' : 
            type === 'error' ? 'bg-red-500' : 
            'bg-blue-500'
        } text-white`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
}

// Sample data for contacts
window.ContactsData = [
    {
        id: 'Cb2dc111aff',
        name: 'Nguyễn Hoàng Vũ',
        code: 'SSG',
        rating: 'Gold',
        email: 'Serip88@Yahoo.Com',
        phone: '0794960801',
        height: '0'
    },
    {
        id: '3422b1dd4517',
        name: 'Nguyễn Minh Táo',
        code: 'MSG',
        rating: 'ROL',
        email: 'Nguyen@Yahoo.Com',
        phone: '132143133',
        height: '202'
    }
];

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.HexaDashApp = new HexaDashApp();
});