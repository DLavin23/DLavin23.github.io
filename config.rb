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

# Auto-prefix vendor prefixes to styles post-processing
# activate :autoprefixer

# Activate syntax highlighting
set :markdown_engine, :redcarpet
set :markdown, :smartypants => true, :tables => true, :autolink => true, :gh_blockcode => true, :fenced_code_blocks => true
activate :syntax

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end


# Build-specific configuration
# configure :build do
#   activate :minify_css
#   activate :minify_javascript
#   # activate :asset_hash
#   activate :gzip
#   activate :imageoptim

#   # Use relative URLs
#   # activate :relative_assets

#   # Or use a different image path
#   # set :http_prefix, "/Content/images/"
# end

# activate :deploy do |deploy|
#   deploy.method = :git
#   deploy.branch = "master"
#   deploy.build_before = true

#   # Optional Settings
#   # deploy.remote   = 'custom-remote' # remote name or git url, default: origin
#   # deploy.branch   = 'custom-branch' # default: gh-pages
#   # deploy.strategy = :submodule      # commit strategy: can be :force_push or :submodule, default: :force_push
#   # deploy.commit_message = 'custom-message'      # commit message (can be empty), default: Automated commit at `timestamp` by middleman-deploy `version`
# end
