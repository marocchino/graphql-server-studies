# frozen_string_literal: true

# Migration to add user to project
class AddUserToProject < ActiveRecord::Migration[7.0]
  def change
    add_reference :projects, :user, foreign_key: true
    add_index :projects, %i[user_id name], unique: true
  end
end
