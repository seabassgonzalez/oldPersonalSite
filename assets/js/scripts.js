
$(document).ready(function(){
  // Create a variable to represent the body
  var $content = $('#content');
  // Create a variable to represent article titles
  var $article = $('.articleTitle');
  var $bttn = $('.button');

  // Testing to see if clicking this button will clear the html - is JS running ok?
  $bttn.click(function(){
    $('#content').html('');
  });

  // Clicking on an article title specifies the page url to call
  $('.articleTitle')[0].click(function(){
    var name = $(this).text().slice(1);
    $content.html().hide();
    $content.get('posts/2016-02-22_telegraphAcademy.html', function("#content"){
      $content.append("#content");
    });
  })
});
