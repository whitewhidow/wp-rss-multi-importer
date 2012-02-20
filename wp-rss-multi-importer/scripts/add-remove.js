/*

  JQuery code to add or remove option fields

*/



jQuery(function() { // when document has loaded


//get last feed number, if one exists, else set to 0

	var z=jQuery('div.wprss-input').size();
		if (z==0){
			var  i=0;
		}else{
			var i = (jQuery('div.wprss-input').get(-1).id);
		}
	i=parseInt(i)+1;
	

	jQuery('a#add').click(function() { // when you click the add link				

		jQuery( "<div class='wprss-input'"+i+"'  id="+i+"><p><label class='textinput' for='feed_name_" + i + "'>Feed Name " + i + "</label>" +

		        "<input id='feed_name_" + i + "' class='wprss-input' size='100' name='rss_import_items[feed_name_" + i + "]' type='text' value='' /> <a href='#' class='btnDeleteNew' id='"+i+"'>Delete this feed</a></p>" +

			"<p><label class='textinput' for='feed_url_" + i + "'>Feed URL " + i + "</label>" +
			
			"<input id='urlid' class='url-item' size='100' name='rss_import_items[feed_url_" + i + "]' type='text' value='' /><span id='errormsg'></span></p></div>")

			.fadeIn('slow').insertBefore('div#buttons');

		// append (add) a new input to the document.

		i++; //after the click i will increment up		

	});

	
	
	jQuery(".btnDelete").click(function() {
        var $id =this.id;
        jQuery('div').remove('#'+$id); 
    });


});

    jQuery(document).on('change', '.url-item', function() {
       //alert(isvalidurl(jQuery(this).val()));  //for testing
        var $messageDiv = jQuery('#errormsg');
        if (isvalidurl(jQuery(this).val())) { 
        	jQuery(this).removeClass("errorfld");
        	$messageDiv.hide().html('');
        }
        else 
       	 {
       	 	jQuery(this).addClass("errorfld") ;
        	$messageDiv.show().html('The URL is not complete, please fix.');
        };
    });

    function isvalidurl(url) {
        var regexp = /(ftp|http|https|Http|Https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
        return regexp.test(url);
    }

	jQuery(document).on('click', '.btnDeleteNew', function() {  //this removes any new feeds not saved
	var $id =this.id;
       jQuery('div').remove('#'+$id); 
    });


