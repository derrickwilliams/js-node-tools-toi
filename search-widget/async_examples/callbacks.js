submitApp(appData, function(err, resultsFromSubmit) {
	if (err) handleError(err);

	// some work

	submitEOITracking(trackingData, function(err, resultsFromTracking) {
		if (err) handleError(err);

		// some more work

		markAsSent(targetDoc, function(err, resultsFromMarking) {
			if (err) handleError(err);

			// and more work

			joinTNMember(memberData, function(err, resultsFromJoin) {
				if (err) handleError(err);

				finallyFinish();
			});
		});
	});

});
