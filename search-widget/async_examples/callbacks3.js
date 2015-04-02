submitApp(appData, handleSubmit);

function handleSubmit(err, resultsFromSubmit) {
	if (err) handleError(err);

	// some work

	submitEOITracking(trackingData, handleTracking);

}

function handleTracking(err, resultsFromTracking) {
	if (err) handleError(err);

	// some more work

	markAsSent(targetDoc, handleMarkAsSent);
}

function handleMarkAsSent(err, resultsFromMarking) {
	if (err) handleError(err);

	// and more work

	joinTNMember(memberData, handleJoin);
}

function handleJoin(err, resultsFromJoin) {
	if (err) handleError(err);

	finallyFinish();
}
