Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :subjects, only: [:index, :show, :create, :update, :destroy], param: :id
      get 'subjectSessions', to: 'sessions#showSessionsSubject'
      resources :sessions, only: [:index, :show, :create, :update, :destroy], param: :session_id
    end
  end

  get '*path', to: 'pages#index', via: :all
end
