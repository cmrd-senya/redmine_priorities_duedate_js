Redmine::Plugin.register :redmine_priorities_duedate_js do
  name 'Redmine Priorities Due Date Js plugin'
  author 'cmrd-senya'
  description 'This is a plugin for Redmine which automatically sets due date of an issue according to the priority'
  version '0.1.0'
  url 'https://github.com/cmrd-senya/redmine_priorities_duedate_js'
  author_url 'https://github.com/cmrd-senya'
end

require_dependency 'priorities_duedate/load_hooks'
