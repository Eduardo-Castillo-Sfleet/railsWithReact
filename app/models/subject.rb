class Subject < ApplicationRecord
    has_many :sessions
    has_many :comments

    def avg_score
        return 0 unless sessions.count.positive?
        sessions.average(:score)
    end
end
