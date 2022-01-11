document.addEventListener("DOMContentLoaded", () => {
  const word = document.getElementById("word");
  const ans = document.getElementById("final");
  const h1 = document.createElement("h1");
  h1.classList.add("answer");
  ans.appendChild(h1);

  //adding the element to display the reversed string when the button is clicked
  var str = "";
  const btn = document.getElementById("submit");
  btn.addEventListener("click", () => {
    str = word.value;
    console.log(str);
    console.log(reverse(str));
    // document.write('<h1 class = "answer">' + reverse(str) + "</h1>");
    ans.classList.add("border");
    ans.classList.add("border-warning");
    h1.innerHTML = "🎉" + reverse(str) + "🎉";
  });

  //Main implementation of reversing a string
  function reverse(str) {
    var arr = str.split(" ");
    console.log(arr);
    var finalarr = [];
    arr.forEach((i) => {
      var new_str = "";
      for (var j = i.length - 1; j >= 0; j--) {
        new_str += i[j];
      }
      finalarr.push(new_str);
    });
    var ans = "";
    finalarr.forEach((i) => {
      ans += i + " ";
    });
    return ans;
  }
});
