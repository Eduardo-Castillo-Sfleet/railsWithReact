module Api
    module V1
        class SubjectsController < ApplicationController
            protect_from_forgery with: :null_session

            def index
                subject = Subject.all
                render json: SubjectSerializer.new(subject, options).serialized_json
            end

            def show
                subject = Subject.find_by(id: params[:id])
                render json: SubjectSerializer.new(subject, options).serialized_json
            end

            def create
                subject = Subject.new(subject_params)

                if subject.save
                    render json: SubjectSerializer.new(subject).serialized_json
                else
                    render json: { error: 'Error' }
                end
            end

            def update
                subject = Subject.find_by(id: params[:id])

                if subject.update(subject_params)
                    render json: SubjectSerializer.new(subject, options).serialized_json
                else
                    render json: { error: 'Error' }
                end
            end

            def destroy
                subject = Subject.find_by(id: params[:id])

                if subject.destroy
                    head :no_content
                else
                    render json: { error: 'Error' }
                end
            end

            private

            def subject_params
                params.require(:subject).permit(:name, :image_url, :description)
            end

            def options
                @options ||= { include: %i[sessions] }
            end

        end
    end
end