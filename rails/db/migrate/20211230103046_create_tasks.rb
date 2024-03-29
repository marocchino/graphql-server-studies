# frozen_string_literal: true

# Migration to create tasks
class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.string :name
      t.references :project, null: false, foreign_key: true
      t.boolean :completed, null: false, default: false

      t.timestamps
    end
  end
end
