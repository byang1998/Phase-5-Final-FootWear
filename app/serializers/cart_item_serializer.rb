class CartItemSerializer < ActiveModel::Serializer
  attributes :id, :cart_id, :item_id, :quantity
end
