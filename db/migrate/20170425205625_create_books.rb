class CreateBooks < ActiveRecord::Migration[5.0]
  def change
    create_table :books do |t|
      t.belongs_to :user, null: false
      t.string :title, null: false
      t.string :author
      t.integer :num_pages
      t.date :date_completed
      t.timestamps
    end
  end
end
