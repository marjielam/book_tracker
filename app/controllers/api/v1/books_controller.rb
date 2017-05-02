class Api::V1::BooksController < ApplicationController
  skip_before_filter :verify_authenticity_token
  respond_to :json

  def index
    @books = Book.where(user: params[:user_id])
    render json: @books
  end

  def create
    book_data = JSON.parse(request.body.read)
    @user = User.find(params[:user_id])
    @author = book_data["book"]["author"]
    @title = book_data["book"]["title"]
    @num_pages = book_data["book"]["num_pages"]
    @book = Book.new(user: @user, title: @title, author: @author, num_pages: @num_pages)
    if @book.save
      @books = @user.books
      render json: @books
    end
  end
end
