require 'spec_helper'

describe "StaticPages" do

  subject { page }
  
  describe "Home page" do
  	before { visit root_path }

    it { should have_selector('h1', text: 'Welcome to Hugeblob') }
    it { should have_selector('title', text: full_title('')) }
  	end
	

  describe "Contact Us page" do
  	before { visit contact_path }

    it { should have_selector('h1', text: 'Contact Hugeblob') }
    it { should have_selector('title', text: full_title('Contact Us')) }
  	end

end
