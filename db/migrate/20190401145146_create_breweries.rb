class CreateBreweries < ActiveRecord::Migration[5.2]
  def change
    create_table :breweries do |t|
      t.string :name, null: false 
      t.string :address, null: false 
      t.text :description, null: false 

      t.timestamps 
    end
  end
end
