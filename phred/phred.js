// Numi extension to convert between error probabilities and Phred quality scores.

// Convert error probability to Phred quality score.
numi.addFunction({"id": "phred", "phrases": "phred"}, function(values) {
	if (values[0]>=1) {
		return Infinity;
	}
	return { "double": -10 * Math.log10(1 - values[0].double) };
});

// Convert Phred quality score to error probability.
numi.addFunction({"id": "unphred", "phrases": "unphred"}, function(values) {
	return { "double": 1 - 10**(values[0].double / -10) };
});