/**
* Simple Load More
*
* Version: 0.1
* Author: Zeshan Ahmed
* Website: https://zeshanahmed.com/
* Github: https://github.com/zeshanshani/simple-load-more/
*/
(function($) {
  $.fn.zaLoadMore = function( options ) {
    // Settings.
    var settings = $.extend({
      count: 5,
      btnHTML: '',
      item: ''
    }, options);

    // Variables
    var $loadMore = $(this);
    var $items = $loadMore.find(settings.item);
    var btnHTML = settings.btnHTML ? settings.btnHTML : '<div class="text-center"><a href="#" class="load-more__btn cta-secondary">View More <i class="fas fa-angle-down"></i></a></div>';
    var $btnHTML = $(btnHTML);

    // Add classes.
    $loadMore.addClass('load-more');
    $items.addClass('load-more__item');

    // Add button.
    if ( ! $loadMore.find( '.load-more__btn' ).length && $items.length > 5 ) {
      $loadMore.append( $btnHTML );
    }

    $btn = $loadMore.find( '.load-more__btn' );

    if ( $items.length > settings.count ) {
      $items.slice(settings.count).hide();
    }

    // Add click event on button.
    $btn.on('click', function(e) {
      e.preventDefault();

      var $this = $(this),
      $updatedItems = $items.filter(':hidden').slice(0, settings.count);

      // Show the selected elements.
      if ( $updatedItems.length > 0 ) {
        $updatedItems.fadeIn();
      }

      // Hide the 'View More' button
      // if the elements lenght is less than 5.
      if ( $updatedItems.length < settings.count ) {
        $this.remove();
      }
    });
  }
}( jQuery ));