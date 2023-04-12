# frozen_string_literal: true

module Types
  # Base class for all input objects
  class BaseInputObject < GraphQL::Schema::InputObject
    argument_class Types::BaseArgument
  end
end
