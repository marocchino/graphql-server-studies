# frozen_string_literal: true

module Types
  # QueryType is the root of all queries
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    description 'The query root of this schema'

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :project, Types::ProjectType, null: false, description: 'A project' do
      argument :id, ID, required: true, description: 'The ID of the project'
    end

    # TODO: remove me
    field :test_field, String, null: false, description: 'An example field added by the generator'

    def project(id:)
      Project.find(id)
    end

    def test_field
      'Hello World!'
    end
  end
end
