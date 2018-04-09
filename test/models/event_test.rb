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

require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
