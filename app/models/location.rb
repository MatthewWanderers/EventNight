# == Schema Information
#
# Table name: locations
#
#  id             :integer          not null, primary key
#  city_name      :string
#  description    :string
#  header_img_url :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Location < ApplicationRecord
  validates :city_name, :description, presence: true

  has_many :events, foreign_key: :location_id
end
