class FeedbackController < ApplicationController

  def create
    feedback = Feedback.new(feedback_params)
    if feedback.save
      respond_to do |format|
        format.json { render json: { status: 'ok', message: 'Success!' } }
      end
    else
      respond_to do |format|
        format.json { render json: { status: 'no', message: 'Error!' } }
      end
    end
  end

  def feedback_params
    params.require(:feedback).permit(:name, :email, :subject, :message)
  end

end
