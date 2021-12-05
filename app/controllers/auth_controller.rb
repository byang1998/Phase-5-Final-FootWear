class AuthController < ApplicationController
    skip_before_action :authorized, only: [:create, :auto_login]

    def create
        @user = User.find_by(username: user_login_params[:username])

        
        if @user && @user.authenticate(user_login_params[:password])
            @token = encode_token({ user_id: @user.id })
            render json: { user: @user, include: [:cart] , jwt: @token }, status: :accepted

        else
            render json: { message: 'Invalid username or password' }, status: :unauthorized
        end
    end

    def auto_login
        @token = params[:token]
        user = User.find(JWT.decode(@token, "Children of the Code", true, algorithm: 'HS256')[0]["user_id"])
        render json: user.to_json(include: [:cart])
   
    end

    private

    def user_login_params
        params.require(:user).permit(:username, :password)
    end
end

end
