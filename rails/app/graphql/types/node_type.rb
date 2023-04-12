# frozen_string_literal: true

module Types
  # replay node type
  module NodeType
    include Types::BaseInterface
    # Add the `id` field
    include GraphQL::Types::Relay::NodeBehaviors

    description 'A node in the replay graph'
  end
end
