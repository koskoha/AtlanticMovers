document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    // var contact_us = document.querySelectorAll('.contact_us');
    var options = {
        minDate: new Date()
    }
    var instances = M.Datepicker.init(elems, options);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var options = {
        
    }
    var instances = M.FormSelect.init(elems, options);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var options = {};
    var instances = M.Collapsible.init(elems, options);
  });