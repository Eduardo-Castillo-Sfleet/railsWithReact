class Subject < ApplicationRecord
    has_many :sessions

    def avg_score
        return 0 unless sessions.count.positive?
        sessions.average(:score)
    end
end
