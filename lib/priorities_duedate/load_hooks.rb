module PrioritiesDuedatePlugin
  module Hooks
    class LayoutHook < Redmine::Hook::ViewListener
	
      def view_layouts_base_html_head(context={})
        <<-TAGS
          #{javascript_include_tag 'priorities_duedate', plugin: 'redmine_priorities_duedate_js'}
        TAGS
      end
    end
  end
end
