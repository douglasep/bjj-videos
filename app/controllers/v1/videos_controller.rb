class V1::VideosController < ApplicationController
  before_action :static_videos, only: %i[index show]

  def index
    render json: @static_videos.as_json
  end

  def show
    render json: @static_videos.find { |video| video[:id] == videos_params['id'].to_i }.as_json

    # render component: 'Video', props: { video: @static_videos.find { |video| video[:id] == videos_params['id'].to_i } }
  end

    private

  def videos_params
    params.permit(:id, :name, :url, :duration, :channel, :position)
  end

  def static_videos
    @static_videos = HashWithIndifferentAccess.new(YAML.load_file(Rails.root.join('static_data', 'videos.yml'))).deep_symbolize_keys[:videos]
  end
end
