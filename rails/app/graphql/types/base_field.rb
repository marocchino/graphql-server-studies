# frozen_string_literal: true

module Types
  # Base class for all fields
  class BaseField < GraphQL::Schema::Field
    argument_class Types::BaseArgument
  end
end
