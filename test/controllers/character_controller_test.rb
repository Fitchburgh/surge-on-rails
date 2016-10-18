require 'test_helper'

class CharacterControllerTest < ActionDispatch::IntegrationTest
  test "should get search" do
    get character_search_url
    assert_response :success
  end

  test "should get edit" do
    get character_edit_url
    assert_response :success
  end

  test "should get add" do
    get character_add_url
    assert_response :success
  end

end
