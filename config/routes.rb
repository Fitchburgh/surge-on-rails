Rails.application.routes.draw do
  get 'index/home'

  get 'index/logout'

  get 'character/search'

  get 'character/edit'

  get 'character/add'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
