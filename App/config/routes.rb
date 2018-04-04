Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resource :users, only: :create
    resource :session, only: %i[create destroy]
  end

  root "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
