class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.belongs_to :language
      t.string :title
      t.text :text

      t.timestamps
    end
  end
end
