require 'active_record'
#
class Loadout < ActiveRecord::Base
  has_one :weak_spell
  has_one :standard_spell
  has_one :strong_spell

  belongs_to :character

  after_initialize :defaults, unless: :persisted?

  def defaults
    self.description ||= 'At least be a little creative...'
  end
end
