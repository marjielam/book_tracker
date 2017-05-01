class Api::V1::BooksController < ApplicationController
  def index
    @books = Book.where(user: params[:user_id])
    render json: @books
  end
end
