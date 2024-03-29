# frozen_string_literal: true

module Types
  # MutationType is the root of all mutations
  class MutationType < Types::BaseObject
    description 'The mutation root of this schema'
    # TODO: remove me
    field :test_field, String, null: false,
                               description: 'An example field added by the generator'
    def test_field
      'Hello World'
    end
  end
end
