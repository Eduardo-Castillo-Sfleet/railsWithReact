class CreateSessions < ActiveRecord::Migration[6.1]
  def change
    create_table :sessions do |t|
      t.string :title
      t.string :description
      t.integer :score
      t.belongs_to :subject, null: false, foreign_key: true

      t.timestamps
    end
  end
end
