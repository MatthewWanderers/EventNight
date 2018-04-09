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
#  location_id           :integer
#

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, :email, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  attr_reader :password
  after_initialize :ensure_session_token

  has_many :events, foreign_key: :organizer_id
  has_many :hosted_events, foreign_key: :organizer_id, class_name: 'Event'

  def self.find_by_creds(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end
end
