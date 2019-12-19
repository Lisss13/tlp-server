class CreateContacts < ActiveRecord::Migration[5.2]
  def change
    create_table :contacts do |t|
      t.string :title
      t.string :subtitle
      t.text :text
      t.belongs_to :language

      t.timestamps
    end
  end
end
