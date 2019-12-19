ActiveAdmin.register Post do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :text, :title, :language_id
  #
  # or
  #
  # permit_params do
  #   permitted = [:text, :title, :language_id]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
  form do |f|
    f.inputs do
      f.input :title
      f.input :text
      f.input :language_id, as: :radio, collection: Language.pluck(:lang, :id)
    end
    f.actions
  end

end
