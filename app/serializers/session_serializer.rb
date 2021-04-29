class SessionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :subject_id
end
