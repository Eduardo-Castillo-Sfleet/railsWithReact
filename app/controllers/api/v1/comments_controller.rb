module Api
    module V1
        class CommentsController < ApplicationController
            protect_from_forgery with: :null_session
            
            def index
                comment = Comment.all
                render json: CommentSerializer.new(comment).serialized_json
            end

            def show
                comment = Comment.find_by(id: params[:id])
                render json: CommentSerializer.new(comment).serialized_json
            end

            def showCommentsSubject
                comment = Comment.where(subject_id: params[:subject_id])
                render json: CommentSerializer.new(comment).serialized_json
            end

            def create
                comment = Comment.new(comment_params)

                if comment.save
                    render json: CommentSerializer.new(comment).serialized_json
                else
                    render json: { error: 'Error' }
                end
            end

            def update
                comment = Comment.find_by(id: params[:id])

                if comment.update(comment_params)
                    render json: CommentSerializer.new(comment).serialized_json
                else
                    render json: { error: 'Error' }
                end
            end

            def destroy
                comment = Comment.find_by(id: params[:id])

                if comment.destroy
                    head :no_content
                else
                    render json: { error: comment.errors.messages }
                end
            end

            private

            def comment_params
                params.require(:comment).permit(:title, :description, :score, :subject_id)
            end
        end
    end
end