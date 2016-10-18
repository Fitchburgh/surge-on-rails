#
class Character < ActiveRecord::Base
  has_one :weak_spell, through: :spell_list
  has_one :standard_spell, through: :spell_list
  has_one :strong_spell, through: :spell_list
  has_one :loadout

  belongs_to :user

  after_initialize :defaults, unless: :persisted?

  before_save :adjust_fields

  def defaults
    self.description ||= 'At least be a little creative...'
  end

  def adjust_fields
    name.capitalize!
  end
end
