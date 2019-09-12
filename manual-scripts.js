  // crawl tasks from RS wiki
  function getTasks() {
    var $rows = $('.wikitable tbody tr');
    var tasks = {};
    $rows.each(function (i, row) {
      var $row = $(row);
      var name = $row.find('a').first().text().trim();
      var weight = +$row.find('td:last-of-type').text().trim();
      var slayerLevel = +$row.find('td:nth-of-type(5)').text().trim().split(', ')[0].split('/')[0];
      if (!isNaN(weight))
        tasks[name] = {
          weight: weight,
          slayerLevel: slayerLevel
        };
    });
    return tasks;
  }