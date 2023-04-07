# frozen_string_literal: true

# Migration to add authentication token to user
class AddAuthenticationTokenToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :authentication_token, :string
  end
end
