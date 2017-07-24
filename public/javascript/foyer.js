// On document load
$(document).ready(function() {
  
  // If the select is changed
  $("#target-select").change(function () {
    
    var bannerClass = "." + this.value;
    
    // Update the banner based on the selection
    $(".client-banner").hide();
    $(bannerClass).show();
    
  });
});