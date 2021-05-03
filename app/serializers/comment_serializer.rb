class CommentSerializer
    include FastJsonapi::ObjectSerializer
    attributes :comment, :subject_id
  end
  