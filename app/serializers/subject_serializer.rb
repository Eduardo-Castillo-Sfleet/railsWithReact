class SubjectSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :image_url, :description

  has_many :sessions
end
