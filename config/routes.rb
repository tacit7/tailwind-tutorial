Rails.application.routes.draw do
  root 'welcome#index'
  get  'about',   to: 'about#index'
  get  'contact', to: 'contact#index'
end
