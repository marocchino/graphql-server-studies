# frozen_string_literal: true

# Note model
class Note < ApplicationRecord
  belongs_to :project
  belongs_to :user
  has_one_attached :attachment

  delegate :name, to: :user, prefix: true

  scope :search, lambda { |term|
    where('LOWER(message) LIKE ?', "%#{term.downcase}%")
  }

  validates :message, presence: true
  validates :attachment, blob: { content_type: [
    'image/jpeg',
    'image/gif',
    'image/png',
    'application/pdf'
  ] }
end
