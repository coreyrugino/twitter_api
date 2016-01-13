class FollowersController < ApplicationController
  def index
    followers = client.followers(client.user).to_json
    render json: followers 
  end
end
