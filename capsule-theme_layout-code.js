{% capture instructions %}
<!--- 
Theme: Capsule
Author: Theme Fiend

Installation Instructions: 
-------------------
- Copy and paste entire code from this file into 'Layout' edit page of your Big Cartel shop. And that's it! The theme is installed!

Customization Instructions:
------------------
- Go to the customize panel of the Capsule theme via Google form: https://docs.google.com/forms/d/e/1FAIpQLSc9VSnH7T8yfMOwy7gHzC5_kMce4bQ9niOqDhye4N8H0ISaSA/viewform. Can log in via your Google account.
- Enter your License Key in the corresponding field of the Google form. Customize theme to your hearts content! :) 
- Enter your License Key in the corresponding field below.
--->
{% endcapture %}


{% assign: LICENSE_KEY = "TF-XXXX-XXXX-XXXX-XXXX" %}


<html>
  <head>
	<title>{% if page.full_url contains "search=" %}Product Search{% else %}{{ page.name }}{% endif %} | {{ store.name }}</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
	
	<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" rel="stylesheet" type="text/css">
	<link href="https://s3.amazonaws.com/themefiend/multiple-product-options/mpo_styles.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" media="screen" href="https://s3.amazonaws.com/themefiend/capsule-theme/capsule-theme-styles.css">
	<!-- Older FontAwesome -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">
	<!-- Newer FontAwesome -->
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css">
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="{{ 'api' | theme_js_url }}"></script>
	 <script type="text/javascript">var licenseKey = '{{ LICENSE_KEY }}'; var storeURL = '{{ store.url }}'; var pageTitle = '{{ page.name }}'; var pageType = '{{ page.category }}'; {% if page.category == "custom" %}var pageContent = '{{ page.content | paragraphs }}';{% endif %}</script>
	 <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.bundle.min.js" async></script>
	<script type="text/javascript" src="https://s3.amazonaws.com/themefiend/capsule-theme/trial_capsule-theme.js"></script>
	<script type="text/javascript" src="https://s3.amazonaws.com/themefiend/capsule-theme/capsule-theme-build.js"></script>	
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-zoom/1.7.20/jquery.zoom.min.js" async></script>
	
	<script type="text/javascript" src="https://s3.amazonaws.com/themefiend/js/jquery.sticky-kit.min.js" async></script>
	<script type="text/javascript" src="https://s3.amazonaws.com/themefiend/js/mousewheel.js" async></script>
	
	<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.3/css/swiper.min.css">
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.3/js/swiper.min.js"></script>
	
	<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css">
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.js" async></script>
	
	<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
	<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.css"/>
	<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
	
	<script type="text/javascript" src="https://abouolia.github.io/sticky-sidebar/js/rAF.js"></script>
	<script type="text/javascript" src="https://abouolia.github.io/sticky-sidebar/js/ResizeSensor.js"></script>
	<script type="text/javascript" src="https://abouolia.github.io/sticky-sidebar/js/sticky-sidebar.js"></script>

	<script src="//assets.juicer.io/embed.js" type="text/javascript"></script>
	<link href="//assets.juicer.io/embed.css" media="all" rel="stylesheet" type="text/css" />

	{{ head_content }}
  </head>
   
  <body id="{{ page.permalink }}-page" class="{{ page.category }}">
	<div id="TFConfigPanel">
		<a href="{{ store.url }}?devmode=true" class="viewSite" target="parent">View Site</a>
    </div>
	<div class="loading_wrap"><div class="spinner"></div></div>
	{% assign: page_content = '' %}{{ page_content }}
	{% if page.full_url contains '/product' %}
	<div class="product_description" style="display:none">
		{% assign prodDesc = product.description | split: '[tab]' %}
		<div class="prodDesc1">{{ prodDesc[0] | paragraphs }}</div>
		<div class="prodDesc2">{{ prodDesc[1] | paragraphs }}</div>
		<div class="prodDesc3">{{ prodDesc[2] | paragraphs }}</div>
	</div>
	{% endif %}
	{% if page.full_url contains '/contact' %}
	<div class="contact_data" style="display:none">
		{% capture bootstrapInput %}required class="form-control" id={% endcapture %}
		{% capture bootstrapTextarea %}required rows=10 class=form-control id={% endcapture %}
		<div class="contactName">{{ contact | contact_input: 'name' | replace: 'id=', bootstrapInput }}</div>
		<div class="contactEmail">{{ contact | contact_input: 'email' | replace: 'id=', bootstrapInput }}</div>
		<div class="contactSubject">{{ contact | contact_input: 'subject' | replace: 'id=', bootstrapInput }}</div>
		<div class="contactMessage">{{ contact | contact_input: 'message' | replace: 'id=', bootstrapTextarea }}</div>
		<div class="contactCaptchaImage">{{ contact.captcha }}</div>
		<div class="contactCaptchaField">{{ contact | contact_input: 'captcha' | replace: 'id=', bootstrapInput  }}</div>
	</div>
	{% endif %}
  </body>

 
 {% assign: Option_Name_Seperator = " / " %}
 
  <script>

	var storeInfo = {"shopURL": "{{ store.url }}", "currencySign": "{{ store.currency.sign }}", "currencyCode": "{{ store.currency.code }}", "country": "{{ store.country }}"};
	
	var pagination = {% paginate products from products.current %}'{{ paginate | default_pagination, "" , "pagination justify-content-center" , "Prev" , "Next"  | replace: "<div", "<ul" | replace: "/div>", "/ul>" | replace: "<a " , "<li class=page-item ><a class=page-link " | replace: "<span", "<li class=page-item ><a class=page-link " | replace: "/a>", "/a></li>" | replace: "/span>", "/a></li>" | replace: "&raquo;" , "" | replace: "&laquo;" , ""  }}'{% endpaginate %};
	
	var CSS = "{{ theme | theme_css_url }}";
	
	var pagesData = {"page":[{% for page in pages.all %} {% assign: storepage = page.name | split: ' - ' %} {% capture pageName %}{{ storepage[0] }} - {{ storepage[1] }}{% endcapture %}{% capture pageParentNamefragment %}{{ storepage[0] }} - {% endcapture %}{% capture pageChildNamefragment %} - {{ storepage[1] }}{% endcapture %}{% unless page.name contains ' - ' %}{"name": {% if page.name contains ' - ' %}"{{ storepage[1] }}"{% else %}"{{ storepage[0] }}"{% endif %}, "original_name": "{{ page.name }}", "url": "{{ page.permalink }}", "sub_page": [{% for subpage in pages.all %}{% if subpage.name contains pageParentNamefragment %}{"name": "{{ subpage.name | remove: pageParentNamefragment }}" , "url": "{{ subpage.permalink }}", "parent_name": "{{ page.name | remove: pageChildNamefragment }}"},{% endif %}{% endfor %}] },{% endunless %}{% endfor %}]};

	var categoriesData = {"category":[{% for category in categories.all %} {% assign: storeCategory = category.name | split: ' - ' %} {% capture categoryName %}{{ storeCategory[0] }} - {{ storeCategory[1] }}{% endcapture %}{% capture parentNamefragment %}{{ storeCategory[0] }} - {% endcapture %}{% capture childNamefragment %} - {{ storeCategory[1] }}{% endcapture %}{% unless category.name contains ' - ' %}{"name": {% if category.name contains ' - ' %}"{{ storeCategory[1] }}"{% else %}"{{ storeCategory[0] }}"{% endif %}, "original_name": "{{ category.name }}", "url": "{{ category.permalink }}", "sub_category": [{% for subCategory in categories.all %}{% if subCategory.name contains parentNamefragment %}{"name": "{{ subCategory.name | remove: parentNamefragment }}" , "url": "{{ subCategory.permalink }}", "parent_name": "{{ category.name | remove: childNamefragment }}"},{% endif %}{% endfor %}] },{% endunless %}{% endfor %}]};
	
  {% if page.full_url contains '/product/' %}
	var productData = {"current_product_id": "{{ product.id }}", "products": [ { "title": "{{ product.name }}", "id": "{{ product.id }}", "images": [{% for image in product.images %}"{{ image | product_image_url | constrain: '900'}}",{% endfor %}], "url": "{{ product.url }}", "maxPrice": "{{ product.max_price | money_with_sign | strip_html }}", "defaultPrice": "{{ product.default_price | money_with_sign | strip_html }}", "maxPriceVal": "{{ product.max_price }}", "defaultPriceVal": "{{ product.default_price }}", "status": "{{ product.status }}", "onSale": "{{ product.on_sale }}", "index": "{{ forloop.index }}", "ppr": "{{ p_pr }}", "creationDate": "{{ product.created_at | date: '%m-%d-%y' }}", "categories":[{% for category in product.categories %}{"value": "{{ category.permalink }}"},{% endfor %}], "product_options":[ {% for option in product.options %} {% assign: variant_option = option.name | split: Option_Name_Seperator %} {% capture optionName %}{{ variant_option[0] }} / {{ variant_option[1] }}{% endcapture %} {"title": "{{ variant_option[0] }}", "original_title": "{{ option.name }}", "option_id": "{{ option.id }}", "product_id": "{{ product.id }}", "stock_quantity": "{% if option.quantity == 0 %}sold-out{% else %}{{ option.quantity }}{% endif %}", "stock_status": "{% if option.quantity == 0 %}sold-out{% else %}in-stock{% endif %}", "tag": "{{ variant_option[0] | replace: ' ', '+' | replace: '/', '-' }}", "relationship": {% if option.name contains Option_Name_Seperator %}"parent"{% else %}null{% endif %}, "value": "{{ variant_option[0] | downcase | escape | replace: ' ', '-'}}", "options": [ {% for option in product.options %}{% if option.name == optionName %}{"title": "{{ option.name | remove: variant_option[0] | remove: Option_Name_Seperator }}", "stock_quantity": "{{ option.quantity }}", "id": "{{ option.id }}", "product_id": "{{ product.id }}", "parent": "{{ variant_option[0] | downcase | escape | replace: ' ', '-'}}", "price":"{{ option.price | money: 'sign' | strip_html }}", "stock_status":"{% if option.quantity == 0 %}sold-out{% else %}in-stock{% endif %}"},{% endif %}{% endfor %} ]}, {% endfor %} ] }, ] };
  {% endif %}
  var productGridData = { {% if page.full_url contains "/product/" %}"current_product_id": "{{ product.id }}",{% endif %} "products": [ {% if page.full_url contains '/product/' %} {% for product in products.all %} {% unless product.id == currentProduct %} { "title": "{{ product.name }}", "images": [{% for image in product.images %}"{{ image | product_image_url | constrain: '900'}}",{% endfor %}], "url": "{{ product.url }}", "maxPrice": "{{ product.max_price | money_with_sign | strip_html }}", "defaultPrice": "{{ product.default_price | money_with_sign | strip_html }}", "maxPriceVal": "{{ product.max_price | money }}", "defaultPriceVal": {{ product.default_price | money }}, "status": "{{ product.status }}", "onSale": "{{ product.on_sale }}", "index": "{{ forloop.index }}", "ppr": "{{ p_pr }}", "creationDate": "{{ product.created_at | date: '%m-%d-%y' }}", "categories":[{% for category in product.categories %}{"value": "{{ category.permalink }}"},{% endfor %}], "product_options":[ {% for option in product.options %} {% assign: variant_option = option.name | split: Option_Name_Seperator %} {% capture optionName %}{{ variant_option[0] }} / {{ variant_option[1] }}{% endcapture %} {"title": "{{ variant_option[0] }}", "tag": "{{ variant_option[0] | replace: ' ', '+' | replace: '/', '-' }}", "relationship": {% if option.name contains Option_Name_Seperator %}"parent"{% else %}null{% endif %}, "value": "{{ variant_option[0] | downcase | escape | replace: ' ', '-'}}", "options": [ {% for option in product.options %}{% if option.name == optionName %}{"title": "{{ option.name | remove: variant_option[0] | remove: Option_Name_Seperator }}", "id": "{{ option.id }}", "parent": "{{ variant_option[0] | downcase | escape | replace: ' ', '-'}}", "price":"{{ option.price | money: 'sign' | strip_html }}", "status":"{% if option.quantity == 0 %}sold-out{% else %}in-stock{% endif %}"},{% endif %}{% endfor %} ]}, {% endfor %} ] }, {% endunless %} {% endfor %} {% endif %} {% if page.full_url contains '/products' or page.full_url contains '/category' %}{% assign prodLimit = theme.products_per_page%}{% endif %}{% if page.permalink == 'home' %}{% assign prodLimit = theme.featured_products %}{% endif %} {% if page.full_url contains '/products' or page.full_url contains '/category' or page.permalink == 'home' %} {% paginate products from products.current %}{% for product in products limit: prodLimit %} { "title": "{{ product.name }}", "images": [{% for image in product.images %}"{{ image | product_image_url | constrain: '900'}}",{% endfor %}], "url": "{{ product.url }}", "maxPrice": "{{ product.max_price | money_with_sign | strip_html }}", "defaultPrice": "{{ product.default_price | money_with_sign | strip_html }}", "maxPriceVal": {{ product.max_price | money }}, "defaultPriceVal": {{ product.default_price | money }}, "status": "{{ product.status }}", "onSale": "{{ product.on_sale }}", "index": "{{ forloop.index }}", "ppr": "{{ p_pr }}", "creationDate": "{{ product.created_at | date: '%m-%d-%y' }}", "categories":[{% for category in product.categories %}{"value": "{{ category.permalink }}"},{% endfor %}], "product_options":[ {% for option in product.options %} {% assign: variant_option = option.name | split: Option_Name_Seperator %} {% capture optionName %}{{ variant_option[0] }} / {{ variant_option[1] }}{% endcapture %} {"title": "{{ variant_option[0] }}", "tag": "{{ variant_option[0] | replace: ' ', '+' | replace: '/', '-' }}", "relationship": {% if option.name contains Option_Name_Seperator %}"parent"{% else %}null{% endif %}, "value": "{{ variant_option[0] | downcase | escape | replace: ' ', '-'}}", "options": [ {% for option in product.options %}{% if option.name == optionName %}{"title": "{{ option.name | remove: variant_option[0] | remove: Option_Name_Seperator }}", "id": "{{ option.id }}", "parent": "{{ variant_option[0] | downcase | escape | replace: ' ', '-'}}", "price":"{{ option.price | money: 'sign' | strip_html }}", "status":"{% if option.quantity == 0 %}sold-out{% else %}in-stock{% endif %}"},{% endif %}{% endfor %} ]}, {% endfor %} ] }, {% endfor %}{% endpaginate %}{% endif %} ] };
  var cartData = {"cartCount": {{ cart.item_count }}, "cartSubtotal": "{{ cart.subtotal | money: 'sign' | strip_html }}", "cartTotal": "{{ cart.total | money: 'sign' | strip_html }}",  "items": [ {% for item in cart.items %} { "title": "{{ item.product.name }}", "id": "{{ item.id }}", "images": [{% for image in item.product.images %}"{{ image | product_image_url | constrain: '900'}}",{% endfor %}], "url": "{{ item.product.url }}", "unit_price": "{{ item.unit_price | money_with_sign | strip_html }}", "quantity": "{{ item.quantity }}", "total_price": "{{ item.price | money_with_sign | strip_html }}", "stock_status": "{{ item.product.status }}", "onSale": "{{ item.product.on_sale }}", "index": "{{ forloop.index }}", "current_option": "{{ item.option.name }}", "product_options":[ {% for option in item.product.options %} {% assign: variant_option = item.option.name | split: ' / ' %} {% capture optionName %}{{ variant_option[0] }} / {{ variant_option[1] }}{% endcapture %} {"title": "{{ variant_option[0] }}", "tag": "{{ variant_option[0] | replace: ' ', '+' | replace: '/', '-' }}", "relationship": {% if item.option.name contains ' / ' %}"parent"{% else %}null{% endif %}, "value": "{{ variant_option[0] | downcase | escape | replace: ' ', '-'}}", "options": [ {% if item.option.name == optionName %}{"title": "{{ item.option.name | remove: variant_option[0] | remove: ' / ' }}", "id": "{{ item.option.id }}", "parent": "{{ variant_option[0] | downcase | escape | replace: ' ', '-'}}", "price":"{{ item.option.price | money: 'sign' | strip_html }}"},{% endif %} ]}, {% endfor %} ] }, {% endfor %} ] };
  </script>
  
  
  <script type="text/javascript" src="https://s3.amazonaws.com/themefiend/capsule-theme/admin_capsule-theme.js"></script>
  <script>
  if (window.location.href.indexOf('/') == -1 ) {
		document.querySelector('#TFConfigPanel').innerHTML = adminHTML + '<link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600" rel="stylesheet">';
   }
</script>
 
  <!-- BEGIN EXTRA SCRIPTS -->
  
  <!-- END EXTRA SCRIPTS -->
  
</html>