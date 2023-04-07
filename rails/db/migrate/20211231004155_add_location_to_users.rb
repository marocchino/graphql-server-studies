# frozen_string_literal: true

# Migration to add location to users
class AddLocationToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :location, :string
  end
end
