navigateTo("http://demosite.appvance.com/");
click(span("Ruby on Rails Bag"));
click(submit("add-to-cart-button"));
click(link("list-group-item[2]"));
click(link("list-group-item[3]"));
click(label("nowrap[1]"));
click(label("nowrap[2]"));
click(checkbox("Brands_Resiliance"));
click(label("nowrap[7]"));
setValue(searchbox("keywords"),"mug");
click(submit("Search"));
setSelected(select("taxon"),"Clothing");
click(span("Home[1]"));
clickXY(image("Apache Baseball Jersey"),"65,52");
setValue(byXPath('//*[@id="quantity"]'),"3");
clickXY(image("Spree 50"),"65,27");
click(link("/?page=2[1]"));
click(link("cart-info full"));
setValue(textbox("order_coupon_code"),"something");
click(submit("update-button"));
click(submit("checkout-link"));
