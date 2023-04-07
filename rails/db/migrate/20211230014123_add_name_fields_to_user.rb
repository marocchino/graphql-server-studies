# frozen_string_literal: true

# Migration to add name fields to user
class AddNameFieldsToUser < ActiveRecord::Migration[7.0]
  def change
    change_table :users, bulk: true do |t|
      t.string :first_name
      t.string :last_name
    end
  end
end
