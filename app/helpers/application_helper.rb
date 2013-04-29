module ApplicationHelper

# Returns the full title on a per-page basis.
  def full_title(page_title)
    base_title = "Michael Mertens x Hand-Crafted Product Strategy, Experience Design and Product Management "
    	if page_title.empty?
		  base_title
		else
    	  "#{base_title} | #{page_title}"
    	end
	end
end
