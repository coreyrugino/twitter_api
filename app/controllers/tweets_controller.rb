class TweetsController < ApplicationController
  def index
    tweets = client.user_timeline.to_json
    render json: tweets
  end

  def create
    tweet = client.update(params[:body])
    render json: tweet.to_json
  end

  def search

    result = client.search("to:#{params[:user] if params[:user]} #{params[:text] if params[:text]}", result_type: "recent").take(3).collect do |tweet|
         tweet
      end

      render json: result.to_json
  end
end
