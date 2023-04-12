# frozen_string_literal: true

module Types
  class ProjectType < Types::BaseObject
    description 'A project'

    field :id, ID, null: false, description: 'The ID of the project'

    field :description, String, null: false, description: 'The description of the project'
    field :due_on, GraphQL::Types::ISO8601Date, null: true, description: 'The due date of the project'
    field :name, String, null: false, description: 'The name of the project'

    def description
      object.description || ''
    end
  end
end
