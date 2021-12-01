class ReviewsController < ApplicationController

    skip_before_action :authorized, only: [:index, :destroy] 


    def index 
        render json: Review.all.to_json(review_serializer)
    end

    def show
        review = Review.find_by(id: params[:id])
        render json: review.to_json(review_serializer)
    end

    def create 
        review = Review.new(review_serializer)
        review.save
        render json:review.to_json()
    end

    def update
    review = Review.find_by(id: params[:id])
    review.update(review_serializer)
    render json: review.to_json()
    end

    def destroy
    review = Review.find_by(id: params[:id])
    review.destroy
    end

    private

    def review_serializer()
        {
            except: [:created_at, :updated_at]
        }
    end

    def review_params
        params.require(:review).permit!
    
    end

end