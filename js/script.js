let modalDate = {
  image: "img",
  title: "title",
  text: "text",
};

$(".galery__element").on("click", function () {
  modalDate.image = $(this).children("img").attr("src");
  modalDate.title = $(this).children("h4").html();
  modalDate.image = $(this).children("img").attr("src");
  getModalDate();
  console.log(modalDate);
  $(".popup").removeClass("is-hidden");
});

$(".popup__btn-close").on("click", function () {
  $(".popup").addClass("is-hidden");
});

function getModalDate() {
  $(".popup__content").children("img").attr("src", modalDate.image);
  // $(".popup__content").children("img").css("width","300px");
  $(".popup__content").children("h4").html(modalDate.title);
  
}
