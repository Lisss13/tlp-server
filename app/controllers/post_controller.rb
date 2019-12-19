class PostController < ApplicationController

  def show
    lang_id = 1
    lang = Language.find_by(lang: params[:lang])
    lang_id = lang.id unless lang.nil?
    question = Post.where(language_id: lang_id)
    respond_to do |format|
      msg = { status: 'ok', message: 'Success!', data: question }
      format.json { render json: msg }
    end
  end

end
