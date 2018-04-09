class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :title
      t.string :description
      t.integer :organizer_id
      t.string :img_url
      t.string :address
      t.datetime :start
      t.datetime :end

      t.timestamps
    end

    add_index :events, :organizer_id
  end
end
