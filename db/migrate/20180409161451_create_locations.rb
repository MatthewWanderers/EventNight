class CreateLocations < ActiveRecord::Migration[5.1]
  def change
    create_table :locations do |t|
      t.string :city_name
      t.string :description
      t.string :header_img_url

      t.timestamps
    end
  end
end
