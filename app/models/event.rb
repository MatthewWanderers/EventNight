# == Schema Information
#
# Table name: events
#
#  id           :integer          not null, primary key
#  title        :string
#  description  :string
#  organizer_id :integer
#  img_url      :string
#  address      :string
#  start        :datetime
#  end          :datetime
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  location_id  :integer
#  category_id  :integer
#

class Event < ApplicationRecord
  validates :title, :description, :organizer_id, :start, presence: true

  belongs_to :organizer, foreign_key: :organizer_id, class_name: 'User'
  belongs_to :location, foreign_key: :location_id

  enum category_id: {
    Music: 0,
    :"Food & Drink" => 1,
    Classes: 2,
    Arts: 3,
    Parties: 4,
    :"Sports & Wellness" => 5,
    Networking: 6
  }
end
