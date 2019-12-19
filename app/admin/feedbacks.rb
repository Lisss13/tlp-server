ActiveAdmin.register Feedback do

  permit_params :name, :email, :subject, :message

end
