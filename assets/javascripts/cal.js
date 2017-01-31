$(document).ready(function() {

	$('#calendar').fullCalendar({

		eventSources: [
			// Facebook Events
			{
				events: [
					{
						title  : 'event1',
						start  : '2016-11-29'
					},
					{
						title  : 'event2',
						start  : '2016-12-15'
					}
				],
				color: 'blue',
				textColor: 'white'
			}

			// other sources

	]

	});
});
