# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.find_or_create_by(email: 'marocchino@gmail.com') do |user|
  user.first_name = 'won'
  user.last_name = 'marocchino'
  user.password = 'password'
end

Project.find_or_create_by(name: 'name') do |project|
  project.description = 'description'
  project.user_id = User.first.id
end
