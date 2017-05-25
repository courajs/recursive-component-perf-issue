const base = 5;

function gen(depth) {
  if (depth <= 0) {
    let result = {};
    for (var i = 1; i <= base; i++) {
      result["key"+i] = "value"+i;
    }
    return result;
  } else if (depth % 2 === 1) {
    let result = [];
    for (var i = 1; i <= base; i++) {
      result.push(gen(depth -1));
    }
    return result;
  } else {
    let result = {};
    for (var i = 1; i <= base; i++) {
      result["key"+i] = gen(depth-1);
    }
    return result;
  }
}

export default gen(3);
