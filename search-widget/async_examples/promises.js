return Promise.try(submitApp)
  .then(submitEOITracking)
  .then(markAsSent)
  .then(joinTNMember)
	.catch(handleError)
	.finally(cleanup);

function submitApp() {
	// possibly do work here if necessary

	return new Promise(function submitAppDefer(resolve, reject) {

		// some work

		if (allIsGood) {
			resolve(appData);
		}
		else {
			reject('Uh oh!'); // some useful message
		}

	});
}

function submitEOITracking(resultsFromSubmit) {
	/* SOMETHING */
}

function markAsSent(resultsFromEOITracking) {
	/* SOMETHING */
}

function joinTNMember(resultsFromMarkAsSent) {
	/* SOMETHING */
}

function handleError(err) {
	/* done in one place */
}

function cleanup() {
	/* whatever needs to be done */
}
