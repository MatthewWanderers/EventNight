class CreateLocations < ActiveRecord::Migration[5.1]
  def change
    create_table :locations do |t|
      t.string :city_name
      t.string :description
      t.string :header_img_url

      t.timestamps
    end

    add_column :users, :location_id, :integer
    add_column :events, :location_id, :integer
    add_column :events, :category_id, :integer
  end
end
