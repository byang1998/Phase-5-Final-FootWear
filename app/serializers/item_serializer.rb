class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :cost, :image, :description
end
