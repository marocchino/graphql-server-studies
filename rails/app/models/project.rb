# frozen_string_literal: true

# Project model
class Project < ApplicationRecord
  belongs_to :owner, class_name: 'User', foreign_key: :user_id, inverse_of: :projects
  has_many :notes, dependent: :destroy
  has_many :tasks, dependent: :destroy

  attribute :due_on, :date, default: -> { Date.current }

  validates :name, presence: true, uniqueness: { scope: :user_id }

  def late?
    due_on.in_time_zone < Date.current.in_time_zone
  end
end
