class SubjectSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :image_url, :description, :avg_score

  has_many :sessions
end
