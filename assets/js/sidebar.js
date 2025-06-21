/**
 * Sidebar functionality
 * Handles menu toggles, active states, and navigation
 */

class SidebarManager {
    constructor() {
        this.activeMenus = ['builder']; // Default active menus
        this.init();
    }

    /**
     * Initialize sidebar functionality
     */
    init() {
        this.setupMenuToggles();
        this.setupNavigation();
        this.setInitialState();
    }

    /**
     * Setup menu toggle functionality
     */
    setupMenuToggles() {
        document.addEventListener('click', (e) => {
            const menuToggle = e.target.closest('[data-menu]');
            if (menuToggle) {
                const menuName = menuToggle.getAttribute('data-menu');
                this.toggleMenu(menuName, menuToggle);
            }
        });
    }

    /**
     * Toggle menu item
     */
    toggleMenu(menuName, element) {
        const chevron = element.querySelector('.fa-chevron-down');
        const submenu = document.getElementById(`${menuName}-submenu`);

        if (chevron) {
            chevron.classList.toggle('rotate-180');
        }

        if (submenu) {
            if (submenu.style.display === 'none') {
                this.showSubmenu(submenu);
                this.activeMenus.push(menuName);
            } else {
                this.hideSubmenu(submenu);
                this.activeMenus = this.activeMenus.filter(menu => menu !== menuName);
            }
        }

        // Add visual feedback
        this.addClickFeedback(element);
    }

    /**
     * Show submenu with animation
     */
    showSubmenu(submenu) {
        submenu.style.display = 'block';
        submenu.style.opacity = '0';
        submenu.style.transform = 'translateY(-10px)';
        
        requestAnimationFrame(() => {
            submenu.style.transition = 'all 0.2s ease-out';
            submenu.style.opacity = '1';
            submenu.style.transform = 'translateY(0)';
        });
    }

    /**
     * Hide submenu with animation
     */
    hideSubmenu(submenu) {
        submenu.style.transition = 'all 0.2s ease-in';
        submenu.style.opacity = '0';
        submenu.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
            submenu.style.display = 'none';
        }, 200);
    }

    /**
     * Setup navigation between pages
     */
    setupNavigation() {
        document.addEventListener('click', (e) => {
            const navItem = e.target.closest('[data-page]');
            if (navItem) {
                const pageName = navItem.getAttribute('data-page');
                this.setActivePage(pageName);
            }
        });
    }

    /**
     * Set active page state
     */
    setActivePage(pageName) {
        // Remove active state from all items
        document.querySelectorAll('[data-page]').forEach(item => {
            item.classList.remove('bg-purple-50');
            item.querySelector('span').classList.remove('text-purple-600', 'font-medium');
            item.querySelector('span').classList.add('text-gray-600');
        });

        // Add active state to current item
        const activeItem = document.querySelector(`[data-page="${pageName}"]`);
        if (activeItem) {
            activeItem.classList.add('bg-purple-50');
            const span = activeItem.querySelector('span');
            if (span) {
                span.classList.remove('text-gray-600');
                span.classList.add('text-purple-600', 'font-medium');
            }
        }
    }

    /**
     * Set initial state of sidebar
     */
    setInitialState() {
        // Show active menus
        this.activeMenus.forEach(menuName => {
            const submenu = document.getElementById(`${menuName}-submenu`);
            const toggle = document.querySelector(`[data-menu="${menuName}"]`);
            
            if (submenu) {
                submenu.style.display = 'block';
            }
            
            if (toggle) {
                const chevron = toggle.querySelector('.fa-chevron-down');
                if (chevron) {
                    chevron.classList.add('rotate-180');
                }
            }
        });

        // Set default active page
        this.setActivePage('customers');
    }

    /**
     * Add click feedback animation
     */
    addClickFeedback(element) {
        element.classList.add('transform', 'scale-95');
        setTimeout(() => {
            element.classList.remove('transform', 'scale-95');
        }, 150);
    }

    /**
     * Collapse all menus
     */
    collapseAll() {
        document.querySelectorAll('[data-menu]').forEach(toggle => {
            const menuName = toggle.getAttribute('data-menu');
            const chevron = toggle.querySelector('.fa-chevron-down');
            const submenu = document.getElementById(`${menuName}-submenu`);

            if (chevron) {
                chevron.classList.remove('rotate-180');
            }

            if (submenu) {
                this.hideSubmenu(submenu);
            }
        });

        this.activeMenus = [];
    }

    /**
     * Expand all menus
     */
    expandAll() {
        document.querySelectorAll('[data-menu]').forEach(toggle => {
            const menuName = toggle.getAttribute('data-menu');
            const chevron = toggle.querySelector('.fa-chevron-down');
            const submenu = document.getElementById(`${menuName}-submenu`);

            if (chevron) {
                chevron.classList.add('rotate-180');
            }

            if (submenu) {
                this.showSubmenu(submenu);
                if (!this.activeMenus.includes(menuName)) {
                    this.activeMenus.push(menuName);
                }
            }
        });
    }
}

// Initialize sidebar when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.SidebarManager = new SidebarManager();
});