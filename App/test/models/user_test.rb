# == Schema Information
#
# Table name: users
#
#  id                    :integer          not null, primary key
#  username              :string           not null
#  email                 :string           not null
#  img_url               :string
#  password_digest       :string
#  session_token         :string
#  organizer_description :string
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
