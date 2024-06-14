function redirectTo(url) {
  return function () {
    if (typeof url !== "string") {
      throw new TypeError(
        `Expected a string for the parameter: 'url'; you passed a: '${typeof url}' instead.`
      );
    } else {
      window.location.href = url;
    }
  };
}
