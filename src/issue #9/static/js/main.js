$(function() {
	var format = function(state) {
			if (!state.id)  {
				return state.text;
			}
			return '<i class="b-info">link</i>' + state.text;
		}

	var selects = $('.b-select').select2({
		formatResult: format,
		formatSelection: format,
		escapeMarkup: function(markup) {
			return markup;
		}
	});

  $.each(selects, function(index, element){
    var select = $(element).data('select2');

    select.onSelect = (function(original, linkClass) {
      return function(data, event) {
        var target;

        if (event != null) {
          target = $(event.target);
        }

        if (target != null && target.hasClass(linkClass)) {
          alert(data.text);
        } else {
          return original.apply(this, arguments);
        }
      }
    })(select.onSelect, 'b-info');
  });
});