/* javascript -> jQuery generic template file
 * ============================================================================================== */
 
$(document).ready(function(){
  
  
  $(document).keypres();
  //$('form .link').keypres();
  
  
  //Now use...
  //var dom = $('form').data('watermark');
  
});

(function($) {
  
  $.keypres = function( element , options ){
    $settings = {};
    element.data('watermark' , this);
    
    this.init = function(element , options){
      $settings = $.extend( {} , $.keypres.defaultOptions , options );
      
      this.event();
    };
    
    this.event = function() {
      element.on('keypress', function(e) {
        
      });
      //this.options
      
    }
    
  // init element function
    this.init( element , options );
  };


//setup options metod
  $.fn.keypres = function(options) {
    return this.each(function() {
      (new $.keypres($(this), options));              
    });        
  };
    
// default options
  $.keypres.defaultOptions = {
    keycode: 13 // default keycode for enter
    
  }
  
})(jQuery);
