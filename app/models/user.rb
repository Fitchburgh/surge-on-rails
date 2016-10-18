require 'active_record'
#
class User < ActiveRecord::Base
  has_one :character

  after_initialize :defaults, unless: :persisted?

  before_save :adjust_fields

  def defaults
    self.notes ||= 'At least be a little creative...'
  end

  def adjust_fields
    username.capitalize!
  end
end
