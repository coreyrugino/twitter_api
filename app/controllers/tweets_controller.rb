class TweetsController < ApplicationController
  def index
    tweets = client.user_timeline.to_json
    render json: tweets
  end

  def create
    tweet = client.update(params[:body])
    render json: tweet.to_json
  end
end
