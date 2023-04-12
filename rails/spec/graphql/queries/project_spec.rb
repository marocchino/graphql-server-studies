# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Project' do
  subject(:result) do
    ApiSchema.execute query, variables:, context: {}
  end

  let(:query) do
    <<~GRAPHQL
      query Project($id: ID!) {
        project(id: $id) {
          id
          name
          description
          dueOn
        }
      }
    GRAPHQL
  end
  let(:variables) do
    { id: project.id }
  end

  let(:project) { Project.first }

  def contain_exactly_content
    include_json(
      'data' => {
        'project' => {
          'id' => project.id.to_s,
          'name' => project.name,
          'description' => project.description,
          'dueOn' => project.due_on.iso8601
        }
      }
    )
  end

  it 'returns project' do
    expect(result.to_h).to contain_exactly_content
  end
end
