Rails.application.routes.draw do
  get 'welcome/index'
  root 'welcome#index'
  get  'about',   to: 'about#index'
  get  'contact', to: 'contact#index'
end
