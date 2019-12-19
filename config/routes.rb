Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/question/:lang', to: 'questions#show'
  get '/contacts/:lang', to: 'contacts#show'
  get '/post/:lang', to: 'post#show'
  get '/product/:lang', to: 'products#show'

  post '/feedback', to: 'feedback#create'

end
