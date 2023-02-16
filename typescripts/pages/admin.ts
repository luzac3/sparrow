$(document).ready(() => {
  $(".copy").on("click", () => {
    const url = "https://woldnet-twei.sakura.ne.jp/sparrow/Views/login.html?user_id=" + $(this).data("id");
    navigator.clipboard.writeText(url)
      .then(
        success => alert("copied");
        error => alert("failue");
      );
  });
});
