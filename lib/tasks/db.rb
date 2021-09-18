namespace :db do
  desc "Generate fake blog posts"
  task generate_blog_posts: :environment do
    10.times do
      BlogPost.create!(
        title: Faker::Book.title,
        content: Faker::Lorem.paragraphs(number: 5).join("\n\n")
      )
    end
    puts "Created 10 fake blog posts."
  end
end
