require 'active_record'
#
class StrongSpell < ActiveRecord::Base
  belongs_to :spell_list

  after_initialize :defaults, unless: :persisted?

  before_save :adjust_fields

  def defaults
    self.description ||= 'At least be a little creative...'
  end

  def adjust_fields
    name.capitalize!
  end
end
