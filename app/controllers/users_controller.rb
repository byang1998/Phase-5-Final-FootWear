class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create, :index]


    def index
        render json: User.all.to_json(user_serializer)
    end


    def show
        user = User.find_by(id: params[:id])
        render json: user.to_json(user_serializer)

    end

    def create
        user = User.create(user_params)
        Cart.create(user_id: user.id)

        if user.valid?
            render json: { user: user, status: :created}
        else

            render json: { error: 'failed to create user', status: :not_acceptable}
        end
    end

    def update 
        user = User.find_by(id: params[:id])
        user.update(user_serializer)
        render json: user.to_json(user_serializer)
    end

    def destroy 
        user = User.find_by(id: params[:id])
        user.destroy
    end


private 

def user_serializer()
    {
        except: [:created_at, :updated_at]
    }
end

def user_params
    params.require(:user).permit(:username, :email, :password)
end

end

