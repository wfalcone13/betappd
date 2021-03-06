class CreateBeers < ActiveRecord::Migration[5.2]
  def change
    create_table :beers do |t|
      t.string :name, null: false 
      t.string :style, null: false 
      t.integer :brewery_id, null: false 
      t.integer :abv, null: false
      t.integer :ibu
      t.integer :rating, null: false 
      t.text :description, null: false 

      t.timestamps 
    end

    add_index :beers, :name, unique: true 
  end
end
