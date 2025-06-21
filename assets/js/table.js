/**
 * Table functionality for HexaDash
 * Handles table rendering, sorting, pagination, and row actions
 */

class TableManager {
    constructor() {
        this.data = [];
        this.filteredData = [];
        this.selectedRows = new Set();
        this.sortColumn = null;
        this.sortDirection = 'asc';
        this.currentPage = 1;
        this.itemsPerPage = 10;
        this.init();
    }

    /**
     * Initialize table functionality
     */
    init() {
        this.loadData();
        this.setupEventListeners();
        this.render();
    }

    /**
     * Load data from global ContactsData
     */
    loadData() {
        this.data = window.ContactsData || [];
        this.filteredData = [...this.data];
    }

    /**
     * Setup event listeners for table interactions
     */
    setupEventListeners() {
        // Master checkbox
        document.addEventListener('change', (e) => {
            if (e.target.id === 'master-checkbox') {
                this.toggleAllRows(e.target.checked);
            }
        });

        // Row checkboxes
        document.addEventListener('change', (e) => {
            if (e.target.classList.contains('row-checkbox')) {
                const rowId = e.target.getAttribute('data-id');
                this.toggleRow(rowId, e.target.checked);
            }
        });

        // Sort headers
        document.addEventListener('click', (e) => {
            const sortHeader = e.target.closest('[data-sort]');
            if (sortHeader) {
                const column = sortHeader.getAttribute('data-sort');
                this.sortBy(column);
            }
        });

        // Action buttons
        document.addEventListener('click', (e) => {
            if (e.target.closest('#refresh-btn')) {
                this.refresh();
            } else if (e.target.closest('#export-btn')) {
                this.exportData();
            } else if (e.target.closest('#delete-btn')) {
                this.deleteSelected();
            } else if (e.target.closest('#add-new-btn')) {
                this.addNew();
            }

            // Row action buttons
            const editBtn = e.target.closest('.edit-btn');
            const deleteBtn = e.target.closest('.delete-btn');
            const viewBtn = e.target.closest('.view-btn');

            if (editBtn) {
                const rowId = editBtn.getAttribute('data-id');
                this.editRow(rowId);
            } else if (deleteBtn) {
                const rowId = deleteBtn.getAttribute('data-id');
                this.deleteRow(rowId);
            } else if (viewBtn) {
                const rowId = viewBtn.getAttribute('data-id');
                this.viewRow(rowId);
            }
        });
    }

    /**
     * Render the table with current data
     */
    render() {
        const tbody = document.getElementById('contacts-tbody');
        if (!tbody) return;

        if (this.filteredData.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="9" class="px-6 py-8 text-center text-gray-500">
                        <i class="fas fa-inbox text-3xl mb-2"></i>
                        <p>No contacts found</p>
                    </td>
                </tr>
            `;
            return;
        }

        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        const pageData = this.filteredData.slice(startIndex, endIndex);

        tbody.innerHTML = pageData.map(contact => this.renderRow(contact)).join('');
        this.updatePagination();
        this.updateMasterCheckbox();
    }

    /**
     * Render a single table row
     */
    renderRow(contact) {
        const isSelected = this.selectedRows.has(contact.id);
        const ratingBadge = this.getRatingBadge(contact.rating);
        
        return `
            <tr class="hover:bg-gray-50 contact-row ${isSelected ? 'bg-purple-50' : ''}">
                <td class="px-6 py-4 whitespace-nowrap">
                    <input type="checkbox" class="row-checkbox rounded border-gray-300" 
                           data-id="${contact.id}" ${isSelected ? 'checked' : ''}>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-mono">
                    ${contact.id}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                        <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                            <span class="text-purple-600 font-medium text-sm">
                                ${contact.name.charAt(0).toUpperCase()}
                            </span>
                        </div>
                        <span class="text-sm font-medium text-gray-900">${contact.name}</span>
                    </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <span class="bg-gray-100 px-2 py-1 rounded text-xs font-medium">${contact.code}</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    ${ratingBadge}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    <a href="mailto:${contact.email}" class="hover:text-purple-600">
                        ${contact.email}
                    </a>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    <a href="tel:${contact.phone}" class="hover:text-purple-600">
                        ${contact.phone}
                    </a>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${contact.height || '-'}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div class="flex items-center space-x-2">
                        <button class="view-btn text-blue-600 hover:text-blue-900" data-id="${contact.id}"
                                title="View">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="edit-btn text-green-600 hover:text-green-900" data-id="${contact.id}"
                                title="Edit">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="delete-btn text-red-600 hover:text-red-900" data-id="${contact.id}"
                                title="Delete">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }

    /**
     * Get rating badge HTML
     */
    getRatingBadge(rating) {
        const badges = {
            'Gold': 'bg-yellow-100 text-yellow-800',
            'Silver': 'bg-gray-100 text-gray-800',
            'Bronze': 'bg-orange-100 text-orange-800',
            'ROL': 'bg-blue-100 text-blue-800'
        };
        
        const badgeClass = badges[rating] || 'bg-gray-100 text-gray-800';
        return `<span class="px-2 py-1 text-xs font-medium rounded-full ${badgeClass}">${rating}</span>`;
    }

    /**
     * Toggle all rows selection
     */
    toggleAllRows(checked) {
        if (checked) {
            this.filteredData.forEach(contact => {
                this.selectedRows.add(contact.id);
            });
        } else {
            this.selectedRows.clear();
        }
        this.render();
    }

    /**
     * Toggle single row selection
     */
    toggleRow(rowId, checked) {
        if (checked) {
            this.selectedRows.add(rowId);
        } else {
            this.selectedRows.delete(rowId);
        }
        this.updateMasterCheckbox();
    }

    /**
     * Update master checkbox state
     */
    updateMasterCheckbox() {
        const masterCheckbox = document.getElementById('master-checkbox');
        if (!masterCheckbox) return;

        const visibleRows = this.filteredData.slice(
            (this.currentPage - 1) * this.itemsPerPage,
            this.currentPage * this.itemsPerPage
        );

        const selectedVisibleRows = visibleRows.filter(contact => 
            this.selectedRows.has(contact.id)
        );

        if (selectedVisibleRows.length === 0) {
            masterCheckbox.checked = false;
            masterCheckbox.indeterminate = false;
        } else if (selectedVisibleRows.length === visibleRows.length) {
            masterCheckbox.checked = true;
            masterCheckbox.indeterminate = false;
        } else {
            masterCheckbox.checked = false;
            masterCheckbox.indeterminate = true;
        }
    }

    /**
     * Sort table by column
     */
    sortBy(column) {
        if (this.sortColumn === column) {
            this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            this.sortColumn = column;
            this.sortDirection = 'asc';
        }

        this.filteredData.sort((a, b) => {
            let valueA = a[column] || '';
            let valueB = b[column] || '';

            // Convert to string for comparison
            valueA = valueA.toString().toLowerCase();
            valueB = valueB.toString().toLowerCase();

            let result = 0;
            if (valueA < valueB) result = -1;
            if (valueA > valueB) result = 1;

            return this.sortDirection === 'desc' ? -result : result;
        });

        this.currentPage = 1;
        this.render();
        this.updateSortHeaders();
    }

    /**
     * Update sort header indicators
     */
    updateSortHeaders() {
        document.querySelectorAll('[data-sort]').forEach(header => {
            const column = header.getAttribute('data-sort');
            const icon = header.querySelector('.sort-icon');
            
            if (column === this.sortColumn) {
                if (icon) {
                    icon.className = `sort-icon fas fa-sort-${
                        this.sortDirection === 'asc' ? 'up' : 'down'
                    } ml-1 text-purple-600`;
                }
            } else {
                if (icon) {
                    icon.className = 'sort-icon fas fa-sort ml-1 text-gray-400';
                }
            }
        });
    }

    /**
     * Filter data based on search term
     */
    filter(searchTerm) {
        if (!searchTerm) {
            this.filteredData = [...this.data];
        } else {
            const term = searchTerm.toLowerCase();
            this.filteredData = this.data.filter(contact =>
                contact.name.toLowerCase().includes(term) ||
                contact.email.toLowerCase().includes(term) ||
                contact.phone.includes(term) ||
                contact.code.toLowerCase().includes(term)
            );
        }
        
        this.currentPage = 1;
        this.selectedRows.clear();
        this.render();
    }

    /**
     * Update pagination info
     */
    updatePagination() {
        const totalItems = this.filteredData.length;
        const startItem = (this.currentPage - 1) * this.itemsPerPage + 1;
        const endItem = Math.min(this.currentPage * this.itemsPerPage, totalItems);
        
        // Update pagination text (if exists)
        const paginationText = document.querySelector('.pagination-text');
        if (paginationText) {
            paginationText.innerHTML = `
                Showing <span class="font-medium">${startItem}</span> to 
                <span class="font-medium">${endItem}</span> of 
                <span class="font-medium">${totalItems}</span> results
            `;
        }
    }

    /**
     * Action methods
     */
    refresh() {
        this.loadData();
        this.selectedRows.clear();
        this.render();
        window.HexaDashApp?.showNotification('Data refreshed successfully', 'success');
    }

    exportData() {
        const dataToExport = this.selectedRows.size > 0 
            ? this.data.filter(contact => this.selectedRows.has(contact.id))
            : this.filteredData;

        const csv = this.convertToCSV(dataToExport);
        this.downloadCSV(csv, 'contacts.csv');
        window.HexaDashApp?.showNotification('Data exported successfully', 'success');
    }

    convertToCSV(data) {
        const headers = ['ID', 'Name', 'Code', 'Rating', 'Email', 'Phone', 'Height'];
        const csvContent = [
            headers.join(','),
            ...data.map(contact => [
                contact.id,
                `"${contact.name}"`,
                contact.code,
                contact.rating,
                contact.email,
                contact.phone,
                contact.height || ''
            ].join(','))
        ].join('\n');
        
        return csvContent;
    }

    downloadCSV(csvContent, filename) {
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    deleteSelected() {
        if (this.selectedRows.size === 0) {
            window.HexaDashApp?.showNotification('Please select items to delete', 'error');
            return;
        }

        if (confirm(`Delete ${this.selectedRows.size} selected item(s)?`)) {
            // Remove selected items from data
            this.data = this.data.filter(contact => !this.selectedRows.has(contact.id));
            this.selectedRows.clear();
            this.filter(document.getElementById('search-input')?.value || '');
            window.HexaDashApp?.showNotification('Selected items deleted', 'success');
        }
    }

    addNew() {
        // Placeholder for add new functionality
        window.HexaDashApp?.showNotification('Add new contact feature coming soon', 'info');
    }

    editRow(rowId) {
        const contact = this.data.find(c => c.id === rowId);
        if (contact) {
            window.HexaDashApp?.showNotification(`Edit ${contact.name} - Feature coming soon`, 'info');
        }
    }

    deleteRow(rowId) {
        const contact = this.data.find(c => c.id === rowId);
        if (contact && confirm(`Delete ${contact.name}?`)) {
            this.data = this.data.filter(c => c.id !== rowId);
            this.selectedRows.delete(rowId);
            this.filter(document.getElementById('search-input')?.value || '');
            window.HexaDashApp?.showNotification('Contact deleted', 'success');
        }
    }

    viewRow(rowId) {
        const contact = this.data.find(c => c.id === rowId);
        if (contact) {
            window.HexaDashApp?.showNotification(`View ${contact.name} - Feature coming soon`, 'info');
        }
    }
}

// Initialize table manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.TableManager = new TableManager();
});