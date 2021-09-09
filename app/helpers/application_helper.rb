module ApplicationHelper

  def toggle_theme
    cookies[:theme] == 'dark' ? 'light' : 'dark'
  end

  def current_theme
    cookies[:theme] = 'light' if cookies[:theme].empty?
    cookies[:theme]
  end
end
