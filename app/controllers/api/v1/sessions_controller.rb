module Api
    module V1
        class SessionsController < ApplicationController
            protect_from_forgery with: :null_session
            def index
                session = Session.all
                render json: SessionSerializer.new(session).serialized_json
            end

            def show
                session = Session.find_by(id: params[:id])
                render json: SessionSerializer.new(session).serialized_json
            end

            def showSessionsSubject
                session = Session.where(subject_id: params[:subject_id])
                render json: SessionSerializer.new(session).serialized_json
            end

            def create
                session = Session.new(session_params)

                if session.save
                    render json: SessionSerializer.new(session).serialized_json
                else
                    render json: { error: 'Error' }
                end
            end

            def update
                session = Session.find_by(id: params[:id])

                if session.update(session_params)
                    render json: SessionSerializer.new(session).serialized_json
                else
                    render json: { error: 'Error' }
                end
            end

            def destroy
                session = Session.find_by(id: params[:id])

                if session.destroy
                    head :no_content
                else
                    render json: { error: session.errors.messages }
                end
            end

            private

            def session_params
                params.require(:session).permit(:title, :description, :score, :subject_id)
            end
        end
    end
end