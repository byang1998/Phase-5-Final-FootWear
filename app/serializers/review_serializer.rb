class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :item_id, :comment, :rating
end
