#
class CharacterController < ApplicationController
  def search
    character = Character.where('name like (?)', "%#{params['search']}%").first

    # grab specific characters loadout ID's
    @payload = Loadout.where(id: character.loadout_id).first

    # grab spell statistics
    @weak_spell = WeakSpell.where(id: @payload.weak_spell_id).first
    @standard_spell = StandardSpell.where(id: @payload.standard_spell_id).first
    @strong_spell = StrongSpell.where(id: @payload.strong_spell_id).first

    # return nested hash with all info
    @payload = { 'character' =>
      { 'name' => character.name,
        'healthPool' => character.health,
        'description' => character.description,
        'loadout' => { 'weakSpell' => @weak_spell,
                       'standardSpell' => @standard_spell,
                       'strongSpell' => @strong_spell
                      } } }

    halt(404) if @payload.empty?

    respond_to do |format|
      format.json { render json: @payload.to_json }
      format.html { render :search }
    end
  end

  def edit
    # current_weak = WeakSpell.where(id: @payload.weak_spell_id).first
    # standard_spell = StandardSpell.where(id: @payload.standard_spell_id).first
    # strong_spell = StrongSpell.where(id: @payload.strong_spell_id).first
    # # update spell loadout
  end

  def add
  end
end
