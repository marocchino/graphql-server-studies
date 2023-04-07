# frozen_string_literal: true

# Task model
class Task < ApplicationRecord
  belongs_to :project

  validates :name, presence: true
end
