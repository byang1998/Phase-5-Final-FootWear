class CartsController < ApplicationController
    skip_before_action :authorized, only: [:index, :destroy] 

    def index
        render json: Cart.all.to_json(cart_serializer)
    end

    def show
        cart = Cart.find_by(id: params[:id])
        render json: cart.to_json(cart_serializer)
    end

    def create
        cart = Cart.new(cart_serializer)
        cart.save
        render json: cart.to_json()
    end

    def update
        cart = Cart.find_by(id: params[:id])
        cart.update(cart_serializer)
        render json: cart.to_json()
    end

    def destroy 
        cart = Cart.find_by(id: params[:id])
        cart.destroy
    end

    private

    def cart_serializer()
        {
            except: [:created_at, :updated_at]
        }

    def cart_serializer
        params.require(:cart).permit!
    end
    
end
