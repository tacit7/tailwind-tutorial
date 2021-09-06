module ApplicationHelper
  def current_theme
    cookies[:theme] = 'light' if cookies[:theme].empty?
    cookies[:theme]
  end
end
