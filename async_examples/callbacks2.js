submitApp(appData, function handleSubmit(err, resultsFromSubmit) {
	if (err) handleError(err);

	// some work

	submitEOITracking(trackingData, function handleTracking(err, resultsFromTracking) {
		if (err) handleError(err);

		// some more work

		markAsSent(targetDoc, function handleMarkAsSent(err, resultsFromMarking) {
			if (err) handleError(err);

			// and more work

			joinTNMember(memberData, function handleJoin(err, resultsFromJoin) {
				if (err) handleError(err);

				finallyFinish();
			});
		});
	});

});
