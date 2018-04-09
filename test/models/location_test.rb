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

require 'test_helper'

class LocationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
