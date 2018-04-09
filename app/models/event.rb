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
#

class Event < ApplicationRecord
  validates :title, :description, :organizer_id, :start, presence: true

  belongs_to :organizer, foreign_key: :organizer_id, class_name: 'User'
end
