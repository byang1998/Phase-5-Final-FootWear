Rails.application.routes.draw do

  
  # post '/login', to: 'auth#create'
  # post '/auto_login', to: 'auth#auto_login'
  get '/logged_in', to: 'application#logged_in?'
  
  resources :reviews
  resources :items
  resources :cart_items
  resources :carts
  resources :users, only: [:create, :index, :show]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
