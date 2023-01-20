exports.getContactUs = (req, res, next) => {
  res.render("contact-us", {
    pageTitle: "Contact Us",
    path: "/contact-us",
    formsCSS: true,
    productCSS: true,
  });
};

exports.postSuccess = (req, res, next) => {
  res.render("success", {
    pageTitle: "Success",
    path: "/success",

  });
};
