###
# Blog settings
###

activate :directory_indexes

# Time.zone = "UTC"
activate :blog do |blog|
  blog.name = "writing"
  blog.prefix = "writing"
  blog.permalink = "{year}/{month}/{day}/{title}.html"
  blog.sources = "{year}-{month}-{day}-{title}.html"
  blog.taglink = "tags/{tag}.html"
  blog.layout = "writing"
  # blog.summary_separator = /(READMORE)/
  blog.summary_length = 200
  blog.year_link = "{year}.html"
  blog.month_link = "{year}/{month}.html"
  blog.day_link = "{year}/{month}/{day}.html"
  blog.default_extension = ".markdown"

  blog.tag_template = "tag.html"
  blog.calendar_template = "calendar.html"

  # Enable pagination
  # blog.paginate = true
  blog.per_page = 20
  # blog.page_link = "page/{num}"
end

activate :blog do |blog|
  blog.name = "books"
  blog.prefix = "books"
  blog.permalink = "books/:title"
  blog.sources = "{year}-{month}-{day}-{title}.html"
  blog.taglink = "tags/{tag}.html"
  blog.layout = "reading"
  # blog.summary_separator = /(READMORE)/
  blog.summary_length = 200
  blog.year_link = "{year}.html"
  blog.month_link = "{year}/{month}.html"
  blog.day_link = "{year}/{month}/{day}.html"
  blog.default_extension = ".markdown"

  blog.tag_template = "tag.html"
  # blog.calendar_template = "calendar.html"

  # Enable pagination
  # blog.paginate = true
  # blog.per_page = 20
  # blog.page_link = "page/{num}"
end

activate :external_pipeline,
         name: :webpack,
         command: build? ?
         "./node_modules/webpack/bin/webpack.js --bail -p" :
         "./node_modules/webpack/bin/webpack.js --watch -d --progress --color",
         source: ".tmp/dist",
         latency: 1

# page "/feed.xml", layout: false

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", layout: false
#
# With alternative layout
# page "/path/to/file.html", layout: :otherlayout
page "tag/*", :layout => :writing

# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

###
# Helpers
###

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

# Minify Assets
# set :css_dir, 'stylesheets'
# set :js_dir, 'javascripts'
set :images_dir, 'images'


# Activate syntax highlighting
set :markdown_engine, :redcarpet
set :markdown, :smartypants => true, :tables => true, :autolink => true, :gh_blockcode => true, :fenced_code_blocks => true
activate :syntax
