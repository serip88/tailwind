// src/utils/router.ts
export interface Route {
  path: string;
  component: () => string;
  title?: string;
}

export class Router {
  private routes: Map<string, Route> = new Map();
  private currentRoute: string = '';
  private rootElement: HTMLElement;
  private notFoundComponent: () => string;

  constructor(rootElement: HTMLElement) {
    this.rootElement = rootElement;
    this.notFoundComponent = () => `
      <div class="min-h-screen bg-gray-50 flex items-center justify-center">
        <div class="text-center">
          <h1 class="text-6xl font-bold text-gray-300 mb-4">404</h1>
          <p class="text-xl text-gray-600 mb-8">Page not found</p>
          <a href="#/" class="text-blue-600 hover:text-blue-800 underline">Go back home</a>
        </div>
      </div>
    `;
  }

  addRoute(path: string, component: () => string, title?: string): Router {
    this.routes.set(path, { path, component, title });
    return this;
  }

  setNotFound(component: () => string): Router {
    this.notFoundComponent = component;
    return this;
  }

  private getRouteFromHash(): string {
    const hash = window.location.hash.slice(1) || '/';
    return hash;
  }

  private navigate(): void {
    const path = this.getRouteFromHash();
    const route = this.routes.get(path);
    
    if (route) {
      this.currentRoute = path;
      // Update page title
      if (route.title) {
        document.title = route.title;
      }
      // Render component
      this.rootElement.innerHTML = route.component();
      // Scroll to top
      window.scrollTo(0, 0);
    } else {
      this.rootElement.innerHTML = this.notFoundComponent();
    }
  }

  start(): void {
    // Listen for hash changes
    window.addEventListener('hashchange', () => this.navigate());
    
    // Initial navigation
    this.navigate();
  }

  getCurrentRoute(): string {
    return this.currentRoute;
  }
}

// Helper function to create router instance
export function createRouter(rootElement: HTMLElement): Router {
  return new Router(rootElement);
}