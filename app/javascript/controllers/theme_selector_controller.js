import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="theme-selector"
export default class extends Controller {
  change(event) {
    event.preventDefault();
    console.log('hello')
    let theme = event.srcElement.innerHTML;
    theme = theme === 'dark' ? 'light' : 'dark'
    document.cookie = `theme=${theme}`;
    event.srcElement.innerHTML = theme;
    document.documentElement.setAttribute('data-theme', theme);
  }
}
