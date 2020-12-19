Rails.application.routes.draw do
  root 'static#index'
  
  namespace :v1 do
    get 'videos/index'
    get 'videos/:id' => 'videos#show'
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
